const express = require('express')
const router = express.Router()

router.post('/register', require('./user/register'))
router.post('/login', require('./user/login'))
router.post('/forgetpassword_1', require('./user/forgetPassword_1'))
router.post('/forgetpassword_2', require('./user/forgetPassword_2'))
router.post('/changepassword', require('./user/changePassword'))

module.exports = router