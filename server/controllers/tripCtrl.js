var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Trip = require('../models/tripSchema'),
    Deposit = require('../models/depositSchema'),
    _ = require('lodash');

module.exports = {

getTrips: function(req, res, next){
  Trip.find(function(err, s) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
},

getTripDetail: function (req, res) {
        var id = req.params.id;
        Trip.findById(id, function (err, resp) {
                if (err) {
                    res.status(500).json(err);
                } else {
                  for (var i = 0; i < resp.deposits.length; i++){
                    resp.amountSavedTotal += resp.deposits[i].amountDeposited;
                    console.log("resp.deposits[i].amountDeposited" + resp.deposits[i].amountDeposited);
                    };
                    res.status(200).json(resp);
                }
            });
    },

createTrip: function(req, res, next) {
    var newTrip = new Trip(req.body);
    newTrip.save(function(err, s) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).json(s);
      }
    });
  },

  makeDeposit: function(req, res, next){
    Trip.findById(req.params.id, function(err, trip){
        if (err) {
            res.status(500).json(err);
        } else {
            trip.deposits.push({description: req.body.description, amountDeposited: req.body.amountDeposited});
            trip.save(function(err, data){
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })

  }

};
