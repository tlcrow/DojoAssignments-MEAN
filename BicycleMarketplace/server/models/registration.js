var uniqueVal = require('mongoose-unique-validator')
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

//need unique validator and bcrypt if using registration
//always need mongoose and scheme

var RegistrationSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "First name can not be empty"],},
    //need type
    //if required add true and message
    last_name: {type: String, required: [true, "Last name can not be empty"],},
    email: {type: String, unique:true, required: [true, "Email can not be empty"], validate:{
        validator: function(value){
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        },
        message: "Invalid email"
    }
    //change validator if username and not email
    },
    password: {type: String, required: [true, "Password can not be empty"],},
    password_confirmation:{type: String, required: [true, "Password confirmation must not be empty"], validate:{
        validator:function(value){
            return value == this.password;
        },
        message: "Password and password confirmation must match"
        }
    },
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
    },
    //this is for one to many relationship
    {timestamps:true});
RegistrationSchema.plugin(uniqueVal); //needed if registration
RegistrationSchema.methods.hash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8));
}
    //needed if registration
RegistrationSchema.methods.match = function(formPass,password){
    return bcrypt.compareSync(formPass,password);
}
// needed if registration
RegistrationSchema.pre("save", function(done){
    console.log('pre');
    this.password = this.hash(this.password);
    this.password_confirmation = undefined;
    done();
}) //checks password and password confirmation
mongoose.model('Registration', RegistrationSchema);
//creates schema