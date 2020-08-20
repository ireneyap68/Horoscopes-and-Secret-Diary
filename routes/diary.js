const express = require('express');
const db = require('../models');
const router = express.Router();

//add new diary
router.post('/profile', (req,res)=>{
    //console.log(req.user,req.body)
    db.diary.findOrCreate({
        //title,content,userID,quoteId
        where: {userId: req.user.id,   //request from userdb
        title: req.body.title,
        content: req.body.content,
        quoteId: parseInt(req.body.quoteId)   //parseInt because drag from quotedb.id
        }
    
    })
    .then(()=>{
        //go back to profile
        res.redirect('/profile')
    })
})
module.exports = router