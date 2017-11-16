var mongoose = require('mongoose');
var Bike = mongoose.model('Bike');
var Registration = mongoose.model('Registration');
//require mongoose, import models

module.exports = {
    getAll: function(req, res) {
        Bike.find({}, function(err, results){
            if(err) { console.log(err); }
            res.json(results);
        });
    },

    //get all bikes

    getBike:function(req, res){
        let {_id} = req.session
        Bike.find({registration: req.session._id}, (err, bikes)=>{
            if(err){
                        return res.status(500).json("cant find bike")
                    }
                    res.json(bikes)
        })
    },

    //get all bikes for the sessioned user

    create: function(req, res){
        console.log('create controller', req.body)
                let { _id } = req.session;
                Registration.findOne({_id:req.session._id}, (err, registration)=>{
                    if(err){
                        console.log(bike.errors)
                        return res.status(502).json(bike.errors)
                    }
                    let bike = new Bike(req.body);
                    bike.registration = registration;
                    bike.save((err)=>{
                        if(err){
                            console.log(err)
                            res.status(500).json(bike.errors)
                        }
                            res.json(true);
                    });
                })
                
    },

    //create a bike with sessioned user
    //this is why import registration

    delete: function(req, res){
        Bike.findOneAndRemove({ _id: req.params.id }, (err, result) => {
            if(err) return res.status(406).json("Bike not deleted")
            console.log('Deleted')
            res.json(true)
        })
    },

    //delete bike

    update: function(req, res){
        console.log('update controller', req.body)
        Bike.findOne({_id: req.params.id }, (err, bike) => {
            if(err){
                return res.status(500).json("cant find bike")
                res.json(bikes)
            }
            bike.title = req.body.title;
            bike.description = req.body.description;
            bike.price = req.body.price;
            bike.location = req.body.location;
            bike.save ((err)=>{
                if (err) return res.status(409).json("Bike has not been updated")
                res.json(bike)
            })
        })
    },

    //update bike, extra bike stuff is NECESSARY

    search: function(req, res){
        Bike.find({title: req.params.search}, (err, bikes) => {
            if(err) return res.status(567).json("Bike not found")
            res.json(bikes);
        })

    }

    //this is for search bar
}