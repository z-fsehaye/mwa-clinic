const router = require('express').Router();
const recordsController = require('../controllers/recordsController')

router.post('/new-record',recordsController.addRecord)
router.put('/doctor/:doc_email/update-record/:p_email', recordsController.updateRecord)
router.post('/record/:p_email/new-visit', recordsController.addVisit)
module.exports = router;