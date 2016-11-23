const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const userCtrl = require('./controllers/userCtrl');
const config = require('./config/config');

const app = express();

require('./config/passport.js')(passport);

app.use(session(config));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/login', passport.authenticate("local-signup"), userCtrl.login);
app.get('/logout', userCtrl.logout);
app.get('/current', userCtrl.getMe);


mongoose.connect("mongodb://localhost:27017/statesDB");
mongoose.connection.once('open', function(){
  console.log("mongoose is connected");
});

app.listen(7000, function(){
  console.log("learning things on 7000");
});
