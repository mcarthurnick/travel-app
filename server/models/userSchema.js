var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);

var userSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  trips: [{
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: false
  }]
});
//
// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, salt);
// };
//
// userSchema.methods.validatePassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', userSchema);
