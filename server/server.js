var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userModelCtrl = require('./controllers/userModelCtrl');
var tripCtrl = require('./controllers/tripCtrl');

var app = express();
var port = 4000;
var mongoUri = 'mongodb://localhost:27017/travapp';

app.use(bodyParser.json());

app.use(express.static(__dirname + './../client'));

mongoose.connect(mongoUri);
      mongoose.connection.once('open', function() {
            console.log('Connected to MongoD at ' + mongoUri);
});


/////////////////////
// USER ENDPOINTS //
////////////////////

// app.get('/user', userModelCtrl.index);
app.post('/user', userModelCtrl.createUser);

/////////////////////
// TRIP ENDPOINTS //
////////////////////

app.get('/trip', tripCtrl.getTrips);
app.post('/trip', tripCtrl.createTrip);
app.get('/trip/:id', tripCtrl.getTripDetail);

app.listen(port, function() {
        console.log('listening on port', port);
      });
