var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var userModelCtrl = require('./controllers/userModelCtrl');
var tripCtrl = require('./controllers/tripCtrl');
var moment = require('moment');
var keys = require('./keys.js');


var app = express();
var port = 4000;
var mongoUri = 'mongodb://localhost:27017/travapp';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + './../client'));

mongoose.connect(mongoUri);
      mongoose.connection.once('open', function() {
            console.log('Connected to MongoD at ' + mongoUri);
});


/////////////////////
// USER ENDPOINTS //
////////////////////

app.post('/register', userModelCtrl.createUser);
app.get('/login', userModelCtrl.getUser);
app.get('/user/current', userModelCtrl.currentUser);

/////////////////////
// TRIP ENDPOINTS //
////////////////////

app.get('/trip', tripCtrl.getTrips);
app.post('/trip', tripCtrl.createTrip);
app.get('/trip/:id', tripCtrl.getTripDetail);

///////////////////////
// DEPOSIT ENDPOINTS //
///////////////////////

app.post('/trip/:id', tripCtrl.makeDeposit);


app.listen(port, function() {
        console.log('listening on port', port);
      });
