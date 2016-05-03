
var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    User = require('../models/userSchema');

module.exports = {
  createUser: function(req, res, next) {
      var newUser = new User(req.body);
      newUser.save(function(err, s) {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.status(200).json(s);
        }
      });
    },

  addUser: function(req, res) {
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });
    user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  }
};
