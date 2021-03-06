import express from 'express';
import getDataFile from '../../helpers/getDataFile';
import saveFile from '../../helpers/saveFile';
import setFileStatus, { UnsavedFile, SavedFile } from '../../helpers/setFileStatus';

const router = express.Router({ mergeParams: true });

router.param('startDate', (req, res, next) => {
	req.params.startDate = req.params.startDate;
	return next();
});

router.param('endDate', (req, res, next) => {
	req.params.endDate = req.params.endDate;
	return next();
});

export default router.get('/start-date/:startDate/end-date/:endDate', (req, res) => {
	const startDate = req.params.startDate;
  const endDate = req.params.endDate;
  const fileLocation = req.query.fileLocation;
  const byIncident = req.query.byIncident;

  // A file location is required, let the user know they need it if it isn't provided
  if (typeof fileLocation !== 'string') {
    throw new Error('Please provide a location to save the files in the form of a string in the fileLocation query parameter.')
  } else {
    fileLocation.replace(/^\/|\/$/g, '');
  }

  // Set SoQL query parameters
	const options = {
		limit: 5000,
		where: `call_date >= "${startDate}" AND call_date <= "${endDate}"`
	};
	
	const file = getDataFile(options);
	
	file.then(response => {
    const savedFiles: SavedFile[] = [];
    const unsavedFiles: UnsavedFile[] = [];

    // If the byIncident flag is set in the query parameters
    // Save the files by incident number
    // Else save the files by row.
    if (typeof byIncident !== 'undefined') {
      const incidentNumbers = response.map(row => row.incident_number );

      incidentNumbers.forEach(number => {
        const list = response.filter(call => call.incident_number === number);
        const fileName = `incident_${number}.json`;
        const saveAction = saveFile(fileLocation, fileName, list);
        setFileStatus(savedFiles, unsavedFiles, saveAction, fileName);
      });
    } else {
        response.forEach(row => {
          const fileName = `call_${row.call_number}.json`;
          const saveAction = saveFile(fileLocation, fileName, row);
          setFileStatus(savedFiles, unsavedFiles, saveAction, fileName);
        });

    }

    res.send({
      savedFiles,
      unsavedFiles,
    })
	}).catch(error => res.send(error));
});