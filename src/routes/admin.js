const express=require("express")
const router=express.Router()
const adminController=require("../controllers/adminController")
const { isAuthorized } = require("../middlewares/isAuthorized")
const {permissionList}=require('../utils/constant')
router.get("/users",isAuthorized(permissionList.getAllUsers),adminController.getAllUsers)
router.put("/users",isAuthorized(permissionList.editUserAccount),adminController.editUserAccount)
router.delete("/users",isAuthorized(permissionList.deleteUserAccount),adminController.deleteUserAccount)
router.get("/permissions",isAuthorized(permissionList.getAllPermissions),adminController.getAllPermissions)
router.get("/roles",isAuthorized(permissionList.getAllRoles),adminController.getAllRoles)
router.post("/roles",isAuthorized(permissionList.addNewRole),adminController.addNewRole)

module.exports=router