var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var MongooseSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name can not be empty"]},
    age: {type: Number},
    sponser: {type: String},
    likes: {type: Number}, 
    _farm: {type: Schema.Types.ObjectId, ref: 'Farm'}
},
{timestamps:true});

mongoose.model('Mongoose', MongooseSchema);