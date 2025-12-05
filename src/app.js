const express=require("express")
const sequelize=require("./utils/DB/config")
const authRoutes=require("./routes/auth")
const adminRoutes=require("./routes/admin")
const userRoutes=require("./routes/user")
const app=express()
const {permissionsSeeds}=require('./utils/DB/seeders')
const { isAuthorized } = require("./middlewares/isAuthorized")
const cors=require('cors')
const port=process.env.PORT
require("./models/index")

var corsWhitelist =[
    process.env.DOMAIN,
    "http://127.0.0.1:3000",
    "http://localhost:3000",
]

const corsOption={
  Credential:true,
  origin:function(origin,callback){
    if(!origin || corsOption.includes(origin)){
      callback(null,true)
    }
    else{
      callback(new Error("not allowed by cors"))
    }
  }
}
app.use(express.json())

app.use(cors(corsOption))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,Accept-Language"
  );
  next();
});

app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/user",userRoutes)

app.use("/",(req,res,next)=>{
res.json({message:"root"})
})
app.use((error,req,res,next)=>{

  
    console.error(error);
    res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      data:error.data||[]
    });
})


sequelize.sync({alter:false}).then(()=>{
    console.log("DB connected")
    app.listen(port)
    
    permissionsSeeds()
})
.catch(err=>{
    console.log("DB connection failed",err)
})