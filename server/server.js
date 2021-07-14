const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const db = require('./config/database.js');

const routes = require('./controller/routes.js');

require('./config/passport')(passport, db);
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(morgan('dev'));
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./controller/routes.js')(app, passport, db);
app.use(express.static('./client'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
  console.log("Working on PORT" + PORT)
});
