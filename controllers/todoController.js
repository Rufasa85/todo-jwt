const express = require('express');
const router = express.Router();
const {User,Todo} = require('../models');
const jwt = require("jsonwebtoken")

router.get("/",(req,res)=>{
    Todo.findAll().then(todoData=>{
        res.json(todoData)
    }).catch(err=>{
        console.log(err);
        res.json({
            msg:"an error occurred",
            err,
        })
    })
})
router.get("/:id",(req,res)=>{
    Todo.findByPk(req.params.id,{
        include:[User]
    }).then(todoData=>{
        res.json(todoData)
    }).catch(err=>{
        console.log(err);
        res.json({
            msg:"an error occurred",
            err,
        })
    })
})

router.post("/",(req,res)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token,process.env.JWT_SECRET)
        Todo.create({
            task:req.body.task,
            priority:req.body.priority,
            isComplete:req.body.isComplete,
            UserId:userData.id
        }).then(todoData=>{
            res.json(todoData)
        })
    }catch (err) {
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }
})

module.exports = router;