const express = require('express');
const db = require('../models');
const { response } = require('express');
const router = express.Router();

//get from userId 
router.get('/', (req, res) => {
    db.quote.findAll({
        where: {userId: req.user.id}
    })
    .then((quote)=>{
        console.log(quote)
        res.render('profile', {quote, author});
    })
    
  });



module.exports = router