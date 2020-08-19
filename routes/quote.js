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

//add quote to profile:favorite page by using userID
router.post('/', (req,res)=>{
    let newData = req.body;
    db.quote.findOrCreate({
        where: {userId: req.user.id,
          content: newData.quote,
            authorName: newData.author}
    })
    .then(([quote, created]) =>{
        console.log(`Was this created? ${created}`);
        res.redirect('profile')
    })
    .catch(err => {
        console.log('error',err);
        res.send('Sorry, no data')
    })
});


//delete quote
router.post('/delete/:id', (req, res) =>{
  //delete the join
  db.quote.destroy({
    where: { id: req.params.id}
  })
  .then(destroyQuote =>{
    res.redirect('/profile')
  })
  .catch(err =>{
    res.send('error', err)
  })
  .catch(err =>{
    res.send('error', err)
  })
})

module.exports = router