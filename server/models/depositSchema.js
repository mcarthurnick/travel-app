var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositSchema = new Schema ({
        date: {type: Date, default: Date.now},
        description: {type: String},
        amountDeposited: {type: Number, min: 1}
    }]
});

module.exports = mongoose.model('Deposit', depositSchema);
