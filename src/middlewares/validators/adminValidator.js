const {body}=require('express-validator')
const { addNewRole } = require('../../services/admin.service')

module.exports={
editUserAccountValidation:[
    body("id")
    .notEmpty()
    .withMessage("id must be not empty")
    .isString()
    .withMessage("id must be String"),
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
    body('status')
    .notEmpty()
    .withMessage("status must be not empty")
    .isIn(["active", "inactive", "pending"])
    .withMessage("status must be in [active, inactive, pending]"),
]
,
deleteUserAccountValidation:[
    body('id')
    .notEmpty()
    .withMessage("id must be not null")
    .isString()
    .withMessage("id must be string")
],
addNewRoleValidation:[
    body("roleName")
    .notEmpty()
    .withMessage("roleName must be not empty")
    .isAlpha()
    .withMessage(' roleName must be alpha'),
    body('permissions')
    .isArray()
    .withMessage('permissions must be array ')
]
,
updateRoleValidator:[
    
    body('id')
    .notEmpty()
    .withMessage("id must be not empty")
    .isInt()
    .withMessage('id must be integer'),
    body("roleName")
    .notEmpty()
    .withMessage("roleName must be not empty")
    .isAlpha()
    .withMessage(' roleName must be alpha'),
    body('permissions')
    .isArray()
    .withMessage('permissions must be array ')
]
}