var mongoose = require('mongoose');
var Registration = mongoose.model('registration');

module.exports = {
    getAll: function(req, res) {
        Registration.find({}, function(err, results){
            if(err) { console.log(err); }
            res.render('all', { registration: results });
        });
    },

    create: function(req, res){
        Registration.find({email:req.body.email}, function(err, register){
            if(register.length > 0){
                res.render("registration", {regErrs: ["This email already exists"]});
            }
            else{
                let registration = new Registration(req.body);
                registration.save(function(errs){
                    if(errs){
                        res.render("registration", {regErrs: registration.errors})
                    }
                    else{
                        req.session.registration_id = registration.id;
                        req.session.first_name = registration.first_name;
                        res.redirect("/registration");
                    }
                });
            }
        })
    },
    
    login: function(req, res){
        let errs = [];
        if(req.body.email.length <1){
            errs.push("Email can not be empty");
        }
        if(req.body.password.length < 1){
            errs.push("Password can not be empty");
        }
        if(errs.length > 0){
            res.render("registration", {logErrs:errs});
        }
        Registration.find({email:req.body.email}, function(err,registration){
            if(registration.length > 0){
                registration = registration[0];

                if(!Registration.schema.methods.match(req.body.password, registration.password)){
                    res.render("registration", {logErrs:["Invalid email or password"]});
                }
                else{
                    req.session.registration_id = registration.id;
                    req.session.first_name = registration.first_name;
                    res.redirect("/registration");
                };
            }
            else{
                res.render("registration", {logErrs: ["User not found. Please register"]});
            }
        });
    }
};