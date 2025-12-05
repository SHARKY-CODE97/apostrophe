const {body}=require('express-validator')
const { signUp } = require('../../services/auth.service')

module.exports={
    signUpValidation:[
     body('fName')
    .notEmpty()
    .withMessage("fName must be not empty")
    .isString()
    .withMessage("fName must be String"),
     body('lName')
    .notEmpty()
    .withMessage("lName must be not empty")
    .isString()
    .withMessage("lName must be String"),
     body('email')
    .notEmpty()
    .withMessage("email must be not empty")
    .isEmail()
    .withMessage("fName must be String"),
      body('phoneNumber')
    .notEmpty()
    .withMessage("phoneNumber must be not empty")
    .isString()
    .withMessage("phoneNumber must be String"),
    body('password')
    .notEmpty()
    .withMessage("password must be not empty")
    .isStrongPassword({
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    })
    .withMessage("password must contains minimum length 8 ,minimum lowercase 1,minimum uppercase 1,minimum number 1 ,minimum symbol 1")
    ]
}