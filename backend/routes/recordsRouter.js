const router = require('express').Router();
const recordsController = require('../controllers/recordsController')

router.post('/new-record',recordsController.addRecord)

router.put('/doctor/:doc_email/update-record/:p_email', recordsController.updateRecord)

router.post('/record/:p_email/new-visit', recordsController.addVisit)

router.get('/user/:user_email/record/:p_email', recordsController.getRecordByPatientEmail)

router.get('/doctor/:doc_email', recordsController.getPatientRecordsForDoctor)

router.get('/user/:user_email/record/:p_email/visit/:visit_id', recordsController)


module.exports = router;