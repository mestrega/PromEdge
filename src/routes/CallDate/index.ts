import express from 'express';
import getDataFile from '../../helpers/getDataFile';
import saveFile from '../../helpers/saveFile';

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

  if (typeof fileLocation !== 'string') {
    throw new Error('Please provide a location to save the files in the form of a string in the fileLocation query parameter.')
  } else {
    fileLocation.replace(/^\/|\/$/g, '');
  }

	const options = {
		limit: 5000,
		where: `call_date >= "${startDate}" AND call_date <= "${endDate}"`
	};
	
	const file = getDataFile(options);
	
	file.then(response => {
    
    const savedFiles: string[] = [];
    const unsavedFiles: {fileName: string, error: NodeJS.ErrnoException}[] = [];

    response.forEach(row => {
      const fileName = `call_${row.call_number}.json`;
      const saveAction = saveFile(fileLocation, fileName, row);

      if (saveAction === 'success') {
        savedFiles.push(fileName);
      } else {
        unsavedFiles.push({
          fileName,
          error: saveAction,
        });
      }
    });

    res.send({
      savedFiles,
      unsavedFiles,
    })
	}).catch(error => res.send(error));
});