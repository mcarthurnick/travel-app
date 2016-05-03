var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema ({

    destination: {type: String, required: true},
    arrivalDate: {type: String},
    departDate: {type: String},
    amountToSave: {type: Number, required: true},
    amountSavedTotal: {type: Number, default: 0},
    created: {type: Date, default: Date.now},
    deposits : [new Schema({
        date: {type: Date, default: Date.now},
        description: {type: String},
        amountDeposited: {type: Number, min: 1}
    }, {strict:false})
  ]
});

module.exports = mongoose.model('Trip', tripSchema);
