const {body}=require('express-validator')
const { deleteAccount } = require('../../services/user.service')

module.exports={
    updateAccountValidation:[
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
    .withMessage("phone number must be string")
    ]
}