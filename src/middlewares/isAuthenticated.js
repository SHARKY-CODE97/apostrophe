const jwt=require("jsonwebtoken")
const { Users } = require("../models")
exports.isAuthenticated=(req,res,next)=>{

    try{
    var token= req.get('Authorization');
     var decodedToken;
    token=toString(token);
    token=token.split(' ')[1];

    if(!token){
        const error=new Error('token is mandatory')
        error.status=401;
        throw error
    }

   
     decodedToken=jwt.verify(token,process.env.SECRET);


if(!decodedToken)
{
    const error=new Error('not valid token')
    error.status=401
    throw error
}

Users.findByPk(decodedToken.userId,{attribute:['tokenVersion']}).then(result=>{
    if(!result){
        const error=new Error('token expired')
        error.status=401
        throw error
    }
    if(result.tokenVersion!== decodedToken.tokenVersion){
        const error=new Error('token expired')
        error.status=401
        throw error
    }
    req.userId=decodedToken.userId
    next()
})

}
catch(error){
    next(error)
}
}