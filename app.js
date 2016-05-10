var express = require('express');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes.js');

var CLIENT_ID = 'abc';
var CLIENT_SECRET = 'pqr';

passport.serializeUser((obj, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

var app = express();
var port = process.env.port || 3000;
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('*', routes);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});