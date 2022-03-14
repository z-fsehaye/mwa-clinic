const router = require('express').Router();
const recordsController = require('../controllers/recordsController')

router.put('/doctor/:doc_email/update-record/:p_email', recordsController.updateRecord)

module.exports = router;