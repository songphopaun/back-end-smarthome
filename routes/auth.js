const express = require('express');
const router = express.Router()
const AuthController = require('../controllers/AuthControllers')
const authenticate =require('../middleware/Authentication')
router.post('/register',AuthController.register)
router.post('/login',AuthController.login)
router.get('/login-faceid',AuthController.loginFaceId)
router.get('/userInfo',authenticate.authenticate,AuthController.userInfo)


module.exports = router