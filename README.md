# Project-2 [Horoscopes and Secret of the day]
please click: https://irene-horos-secret-note.herokuapp.com/

Basically, this is a Secret Note app. Users able to check daily horoscopes in the homepage and need to signup/login to access the Secrect Section (secret of the day and secret note). Secret Notes allow user to add own favorite quotes and make a secret note of the quote added.

# Motive of this app : Inspirational Quotes Can Literally Change Your Day … and Your Life!
1. It’s easier to keep a positive frame of mind if you make Inspirational Quotes a habit.
2. Inspirational quotes can serve as a comfort during difficult times of great personal challenges.
3. Daily inspirations remind you that you are not alone.
4. Inspirations help remind you what is really important.
5. If you need help with being better instead of bitter, daily inspirations can help guide you on the journey.
6. Daily Inspirations help you “get through it” when you can’t “get over it.” 

-----------------------------------------------------------------------
### User Stories
1. Home page shows daily horoscopes and inspiration quote of the day.
2. User signup / login to access the favorite list(My Secret Note page).
3. User can add inspiration quote to favorite list.
4. User can delete and add notes to the quote added.
-----------------------------------------------------------------------
### Database / API / Installation
1. Database 
- Using postgresql and Heroku for hosting the back-end.
- Create 3 models: user, quote(add a favorite to note) and diary(make a note/diary to a qoute).
- Associate each model: user hasMany quote, quote hasMany diary, diary belongsTo quote.

2. API Used
- Horoscopes API : using aztroJs thru npm i aztro-jz, drag the daily horoscope function to server.js. Refer link: https://aztro.sameerkumar.website
- Inspiration Random Quota API: It's simple to use without API Key. Refer link: https://zenquotes.io/api/random

3. npm install: 
    "axios": "^0.19.2",
    "aztro-js": "^0.1.5",
    "bcrypt": "^5.0.0",
    "connect-flash": "^0.1.1",
    "dotenv": "^8.0.0",
    "ejs": "^2.6.2",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "express-session": "^1.17.1",
    "method-override": "^3.0.0",
    "moment": "^2.27.0",
    "morgan": "^1.9.1",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "pg": "^7.11.0",
    "sequelize": "^5.8.12"

-----------------------------------------------------------------------
### ERD
https://whimsical.com/VGZmyH2RsZkfm85HVbg1rN
----------------------------------------------------------

### Wireframes
https://whimsical.com/97T9zXwMjjVPY56k9dfWFA
----------------------------------------------------------