const express = require('express');
const router = express.Router();
const {User,Todo} = require('../models');

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

module.exports = router;