var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId,
    Trip = require('../models/tripSchema');

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
  }

};
