
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../models/userSchema');

module.exports = {
  createUser: function(req, res, next) {
      var newUser = new User(req.body);
      newUser.save(function(err, s) {
        if (err) {
          res.status(500).send();
        } else {
          console.log("Created User : " + s);
          res.status(200).json(s);
        }
      });
    },

    // getUser: function(req, res, next){
    //   User.findById(req.params.id, function(err, s){
    //     if(err){
    //       console.log(err);
    //       res.status(500).send();
    //     } else {
    //       res.status(200).send(s);
    //     }
    //   });
    // },

    getUser: function(req, res, next){
      console.log("getUser = " + req.user);
    },

    currentUser: function(req, res, next) {
    if (req.user) {
      res.status(200).send(req.user);
      console.log(req.user, 'is the current user');
    }
  }

  // addUser: function(req, res) {
  //   var user = new User({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     password: req.body.password
  //   });
  //   user.save(function(err, user) {
  //     if (err)
  //       res.send(err);
  //     res.json(user);
  //   });
  // }
};
