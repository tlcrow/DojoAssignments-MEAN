var mongoose = require('mongoose');
var Registration = mongoose.model('Registration');


module.exports = {
    getAll: function(req, res) {
        Registration.find({}, function(err, results){
            if(err) { console.log(err); }
            res.render('all', { registration: results });
        });
    },

//get all users

    getUser:function(req, res){
        let {_id} = req.session
        Registration.findById({_id}, (err, auth)=>{
            if(err){
                return res.status(500).json("cant find user")
            }
            res.json(auth)
        })
    },

//this gets a single user/registration

    create: function(req, res){
                console.log(req.body);
                let registration = new Registration(req.body);
                console.log(registration);
                registration.save((errs)=>{
                    if(errs){
                        console.log(registration.errors)
                        res.status(500).json(registration.errors)
                    }
                    else{
                        req.session._id = registration._id;
                        res.json(true);
                    }
                });
    },

    //basic create method without one to many relationship
    
    login: function(req, res){
        Registration.findOne({email:req.body.email}, function(err, registration){
            if(err || !registration){
                console.log("Could not find", err)
                return res.status(500).json("Could not find match")
            }
            if(!registration.match(req.body.password, registration.password)){
                res.status(500).json("Invalid email or password");
            }
            else{
                req.session._id = registration._id
                res.json(true);
            }
        });
    },

//login function

    logout: function(req, res){
        console.log("GOT TO CONTROLLER:",req.session._id)
        
        if(req.session._id){
            req.session._id = undefined;
            console.log("Controller clearing session:",req.session._id)
            res.json(true)
        }
        res.json(false)
    },

//logout function

    contactUser: function(req, res){
        // console.log("currentUser in controller", req.session._id)
        // console.log("currentUser in controller", req.params.id)
        Registration.findById({ _id: req.params.id }, (err, registration) => {
            
            if(err) {
                return res.status(457).json("can't find user")
            }
            const contacts={
                name: registration.first_name + " " + registration.last_name,
                email: registration.email
            }
            res.json(contacts)
        })
    }
//get one user, and get certain information

        
};