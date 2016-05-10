var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Trip = require('../models/depositSchema');

module.exports = {

  makeDeposit: function(req, res, next){
    var newDeposit = new Deposit(req.body);
    newTrans.save(function(err, s){
      if (err){
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).json(s);
      };
    })
  }

};
