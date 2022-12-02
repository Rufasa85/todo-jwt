const express = require('express');
const router = express.Router();
const {User,Todo} = require('../models');

router.get("/",(req,res)=>{
    User.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.json({
            msg:"an error occurred",
            err,
        })
    })
})
router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id,{
        include:[Todo]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.json({
            msg:"an error occurred",
            err,
        })
    })
})

module.exports = router;