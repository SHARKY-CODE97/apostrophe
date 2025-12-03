const {permissionList,role} = require("../constant");
const { Permissions, Roles } = require("../../models");
const { where } = require("sequelize");
exports.permissionsSeeds= async ()=> {
    try{
       
  const allPermission = Object.values(permissionList)
  

  for (let name of allPermission) {
    await Permissions.findOrCreate({ where: { permissionName:name }, default: { permissionName:name } });
  }
  let roleList=Object.values(role)
for(let name of roleList){
  await Roles.findOrCreate({ where: { roleName:name }, default: { roleName:name } })
  }




}catch(error){
   console.log(error)
}
}


