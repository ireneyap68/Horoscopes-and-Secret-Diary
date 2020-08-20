require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const SECRET_SESSION = process.env.SECRET_SESSION || "horoscope";
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const moment = require('moment');
const aztroJs = require('aztro-js');
const axios = require('axios');

//array list horoscopes
const horos = ['capricorn','aquarius','pisces','aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius'];
let API_KEY = process.env.API_KEY;

var shortDateFormat = "MMMM Do"+", "+"YYYY"; // this is just an example of storing a date format once so you can change it in one place and have it propagate
app.locals.moment = moment; // this makes moment available as a variable in every EJS page
app.locals.shortDateFormat = shortDateFormat;

// require the authorization middleware at the top of the page
const isLoggedIn = require('./middleware/isLoggedIn');
const db = require('./models');

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride('_method'));

//secret: what we actually giving the user to use our site
//resave: save the session even if it's modified,make this false
//saveUninitialized:if we have new session,will save, therefore
//setting this to true

app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}));

// Initialize passport and run session as middleware
app.use(passport.initialize());
app.use(passport.session())
//flash for temporary message to the user
app.use(flash());

// middleware to have our message accessible for every view
app.use((req, res, next) => {
  // before every route, we will attached our current user to res.local
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

//homepage GET horoscopes set up for loop to dispaly each sign
app.get('/', (req, res) => {
  const horoscopes = {};
  for (i in horos){
    const horo = horos[i];
    aztroJs.getTodaysHoroscope(horo, function(h){
      console.log(h)
      horoscopes[horo] = h;
      if(Object.keys(horoscopes).length == horos.length){
        res.render('index', { alerts: res.locals.alerts , horoscopes: horoscopes, horos:horos})
      }
    })
  } 
});

//quote route
app.use('/quote',isLoggedIn, require('./routes/quote'));
app.use('/diary',isLoggedIn, require('./routes/diary'));
// app.post('/diary', (req,res)=>{
//   db.diary.create({
//       //title,content
//       title: req.body.title,
//       content: req.body.content,
//       userId: req.user.id,
//       quoteId: req.quote.id
    
//   })
//   .then(()=>{
//       //go back to profile
//       res.redirect('/profile')
//   })
// })


//favorite page to specific user
app.get('/profile',isLoggedIn, (req,res) =>{
  db.quote.findAll({
    include: [db.user, db.diary]
            // where: {userId: req.user.id}
        })
  .then((quote)=>{
    res.render('profile', {quote:quote})
  })
})


app.use('/auth', require('./routes/auth'));


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${port} 🎧`);
});

module.exports = server;
