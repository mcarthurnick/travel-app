var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema ({

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    destination: {type: String, required: true},
    arrivalDate: {type: String},
    departDate: {type: String},
    amountToSave: {type: Number},
    amountSavedTotal: {type: Number, default:0 },
    created: {type: Date, default: Date.now},
    deposits: [{
        date: {type: Date, default: Date.now},
        description: {type: String},
        amountDeposited: {type: Number, min: 1, required: true}
    }]
});

module.exports = mongoose.model('Trip', tripSchema);
