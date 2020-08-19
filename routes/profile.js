// const express = require('express');
// const db = require('../models');
// const router = express.Router();

// //get from userId 
// router.get('/quote', (req, res) => {
//     db.quote.findAll({
//         where: {userId: req.user.id}
//     })
//     .then((response)=>{
//         console.log(response)
//         res.render('profile', {response});
//     })
//     .catch(err =>{
//         res.send('error rending quotes added', err)
//     }) 
// });




// module.exports = router