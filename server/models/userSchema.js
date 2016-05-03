var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  username: {type: String, unique: true, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: Number},
  location: {type: String},
  baseAirport: {type: String},
  password: {type: String},
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: false
  }],
});


module.exports = mongoose.model('User', userSchema);
