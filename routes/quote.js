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
        where: {content: newData.quote,
            authorName: newData.author}
    })
    .then(([quote, created]) =>{
        console.log(`Was this created? ${created}`);
        quotes.addContent(quote)
    })
    .then(()=>{
      res.redirect('profile')
    })

    .catch(err => {
        console.log('error',err);
        res.send('Sorry, no data')
    })
});

//get quote id
router.get('/id:', (req,res) =>{
  db.quote.findOne({
    where: {id : req.params.id}
  })
  .then((quote)=>{
    res.render('profile', {quote})
  })
  .catch(err =>{
    console.log('Error', err)
  })
  
})

//delete
router.delete('/:id', (req, res) =>{
  //delete the join
  db.quotes.destroy({
    where: { quoteId: req.params.id}
  })
  .then(destroyQuote =>{
    res.redirect('profile')
  })
  .catch(err =>{
    res.send('error', err)
  })
  .catch(err =>{
    res.send('error', err)
  })
})

module.exports = router