const express = require('express');
const db = require('../models');
const { response } = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.quote.findAll({
        where: {user: req.userId.quote}
    })
    .then((response)=>{
        console.log(response)
        res.render('profile', {quote:response});
    })
    
  });



//add new diary note
router.post('/', (req,res)=>{
    db.comment.create({
        //title,content
        title: req.body.title,
        content:req.body.content
    })
    .then(()=>{
        // go back profile
        res.redirect('profile')
    })
})

module.exports = router