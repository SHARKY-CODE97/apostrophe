const express=require("express")
const sequelize=require("./utils/DB/config")
const authRoutes=require("./routes/auth")
const adminRoutes=require("./routes/admin")
const userRoutes=require("./routes/user")
const app=express()
const {permissionsSeeds}=require('./utils/DB/seeders')
const { isAuthorized } = require("./middlewares/isAuthorized")

require("./models/index")



app.use(express.json())

app.use("/auth",authRoutes)
app.use("/admin",adminRoutes)
app.use("/user",userRoutes)

app.use("/",(req,res,next)=>{
res.json({message:"root"})
})
app.use((error,req,res,next)=>{

    console.error(error);
    res.status(error.status || 500).json({
        message: error.message || "Internal Server Error"
    });
})


sequelize.sync({alter:false}).then(()=>{
    console.log("DB connected")
    app.listen(3000)
    
    
})
.catch(err=>{
    console.log("DB connection failed",err)
})