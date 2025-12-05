const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const {permissionList}=require('../utils/constant')
const {isAuthorized}=require('../middlewares/isAuthorized')
const {isAuthenticated}=require('../middlewares/isAuthenticated')
const {updateAccountValidation}=require('../middlewares/validators/userValidator')
const {validationError}=require("../middlewares/validators/validationError")
router.get('/profile',isAuthenticated,isAuthorized(permissionList.getProfileInfo),userController.getProfileInfo)
router.delete('/profile',isAuthenticated,isAuthorized(permissionList.deleteAccount),userController.deleteAccount)
router.put('/profile',updateAccountValidation,validationError,isAuthenticated,isAuthorized(permissionList.updateAccount),userController.updateAccount)

module.exports=router