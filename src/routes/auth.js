const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {signUpValidation}=require('../middlewares/validators/authValidator')
const {validationError}=require('../middlewares/validators/validationError')
router.post('/signup',signUpValidation,validationError, authController.signUp);
router.post('/login', authController.login);


module.exports = router;