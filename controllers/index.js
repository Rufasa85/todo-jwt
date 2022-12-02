const express = require('express');
const router = express.Router();
const userRoutes = require("./userController")
const todoRoutes = require("./todoController")

router.get("/",(req,res)=>{
    res.send("this is the homepage")
})
router.use("/api/users",userRoutes)
router.use("/api/todos",todoRoutes)

module.exports = router;