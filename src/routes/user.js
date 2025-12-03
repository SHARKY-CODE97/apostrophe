const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
router.get('/profile',userController.getProfileInfo)
router.delete('/profile/delete',userController.deleteAccount)


module.exports=router