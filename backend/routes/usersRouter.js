const express = require('express')
const controller = require('../controllers/usersController')
const router = express.Router()

router.post('/signup',controller.signup)
router.post('/login',controller.login)
router.get('/checkemail/:email',controller.checkemail)

module.exports = router