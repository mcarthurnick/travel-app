var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositSchema = new Schema ({
        trip: {type: mongoose.Schema.Types.ObjectId, ref: 'Trip'},
        date: {type: Date, default: Date.now},
        description: {type: String},
        amountDeposited: {type: Number, min: 1, required: true}
    })

module.exports = mongoose.model('Deposit', depositSchema);
