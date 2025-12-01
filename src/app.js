const express=require("express")
const sequelize=require("./utils/DB/config")
const authRoutes=require("./routes/auth")
const app=express()
require("./models/index")



app.use(express.json())

app.use("/auth",authRoutes)


app.use("/",(req,res,next)=>{
res.json({message:"root"})
})
app.use((error,req,res,next)=>{

    console.error(error);
    res.status(error.status || 500).json({
        message: error.message || "Internal Server Error"
    });
})


sequelize.sync({alter:true}).then(()=>{
    console.log("DB connected")
    app.listen(3000)
})
.catch(err=>{
    console.log("DB connection failed",err)
})