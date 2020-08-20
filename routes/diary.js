const express = require('express');
const db = require('../models');
const router = express.Router();

//add new diary
router.post('/profile', (req,res)=>{
    //console.log(req.user,req.body)
    db.diary.findOrCreate({
        where: {userId: req.user.id,
        //title,content,userID,quoteId
        title: req.body.title,
        content: req.body.content,
        
        quoteId: parseInt(req.body.quoteId)
        }
    
    })
    .then(()=>{
        //go back to profile
        res.redirect('/profile')
    })
})
module.exports = router