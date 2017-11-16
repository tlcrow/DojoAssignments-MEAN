var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var BikeSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title can not be empty"],},
    description: {type: String, required: [true, "Description can not be empty"], maxlength: 200},
    location: {type: String, required: [true, "Location is needed"]},
    price: {type: Number, required: [true, "Price can not be empty"], min: 1},
    registration: {type: Schema.Types.ObjectId, ref: 'Registration'}
    //this is for one to many relationship
    },
    {timestamps:true});

    mongoose.model('Bike', BikeSchema);