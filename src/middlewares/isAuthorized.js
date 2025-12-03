const { Users, Roles ,Permissions, Roles_Permissions, Users_Roles} = require("../models")

 function isAuthorized(permission_const){
return async (req,res,next)=>{
await Users.findByPk('2b5f5ec6-fd57-488d-af1c-4f3c1f076048',{
    
    include:[{
       
        model:Roles,
        include:[{
            model:Permissions,
            attributes:["permissionName"],
            through:{attributes:[]}
        }]
        ,
        through:{attributes:[]}
       
    }]
}).then(result=>{
    console.log(result.Roles)
    result=result.Roles.flatMap(p=>p.Permissions).map(p=>p.permissionName)
    console.log(result)
   let compareResult=result.includes(permission_const)
    if(compareResult){
        next()
    }
    else{
        const error=new Error("not authorized")
        error.status=403
        next(error)
    }
    
})

}}

module.exports={isAuthorized}