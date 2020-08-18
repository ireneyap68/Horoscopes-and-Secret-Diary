const express = require('express')
const db = require('../models')
const axios = require('axios')
const router = express.Router()


router.get('/',  (req,res) =>{
    const horo = req.query.horo;
    axios.get('https://zenquotes.io/api/random')
    .then ((response)=>{
      console.log(response);
      res.render('quote', {data:response.data[0]})
    })
    .catch(err =>{
      console.log('error', err)
    })
  
  })

//add quote to profile
router.post('/', (req,res)=>{
    let newData = req.body;
    db.quote.findOrCreate({
        where: {content: newData.quote},
        defaults: {authorName: newData.author}
        
    })
    .then(([newQuote, created]) =>{
        console.log(`Was this created? ${created}`);
        res.redirect('/profile');
    })

    .catch(err => {
        console.log('error',err);
        res.send('Sorry, no data')
    })
});



module.exports = router