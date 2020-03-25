import express from 'express';
import getDataFile from '../../helpers/getDataFile';

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

	const options = {
		limit: 5000,
		where: `call_date >= "${startDate}" AND call_date <= "${endDate}"`
	};
	
	const file = getDataFile(options);
	
	file.then(response => res.send(response)).catch(error => res.send(error));
});