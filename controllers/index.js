const express = require('express');
const router = express.Router();
const userRoutes = require("./userController")
const todoRoutes = require("./todoController")
const jwt =require("jsonwebtoken")

router.get("/",(req,res)=>{
    res.send("this is the homepage")
})
router.get("/token",(req,res)=>{
    const token = jwt.sign({
        name:"joe",
        job:"teacher"
    },process.env.JWT_SECRET,{
        expiresIn:"2h"
    })
    res.json({
        token
    })
})
router.get("/readtoken",(req,res)=>{
    const token =req.headers.authorization.split(" ")[1];
    try{

        const tokenData = jwt.verify(token,process.env.JWT_SECRET)
        console.log(tokenData)
    } catch(err){
        console.log("error")
        console.log(err);
        res.status(500).json({msg:"an error occurred!",err})
    }
    res.send("check your logs!")
})
router.use("/api/users",userRoutes)
router.use("/api/todos",todoRoutes)

module.exports = router;