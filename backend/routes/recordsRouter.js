const router = require('express').Router();
const recordsController = require('../controllers/recordsController')

router.post('/',recordsController.addRecord)

router.put('/record/:p_email', recordsController.updateRecord)

router.post('/record/:p_email/new-visit', recordsController.addVisit)

router.get('/record/:p_email', recordsController.getRecordByPatientEmail)

router.get('/', recordsController.getPatientRecordsForDoctor)

router.get('/record/:p_email/visit/:visit_id', recordsController.getPatientVisitById)


module.exports = router;