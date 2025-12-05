const {validationResult}=require("express-validator")

exports.validationError=(req,res,next)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        const error=new Error("validation error")
        error.status=400
        error.data=errors.array()
        next(error)
    }
    next()
}