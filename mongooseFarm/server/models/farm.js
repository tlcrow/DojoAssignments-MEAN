var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var FarmSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name can not be empty"]},
    description: {type: String},
    creator: {type: String},
    // answers: {type: Number},
    _mongoose: [{type: Schema.Types.ObjectId, ref: 'Mongoose'}]
},
{timestamps:true});

mongoose.model('Farm', FarmSchema);