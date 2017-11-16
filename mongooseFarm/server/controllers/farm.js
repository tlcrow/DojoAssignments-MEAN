var mongoose = require('mongoose');
var Farm = mongoose.model('Farm');
var Mongoose = mongoose.model('Mongoose');
//require mongoose, import models

module.exports = {
    getAll: function(req, res) {
        console.log("Reached one in one to many controller")
        Farm.find({}, function(err, results){
            if(err) { console.log("one to many error-controller", err); }
            res.json(results);
        });
    },
    //should be good to go, get all

    getOne:function(req, res){
        console.log("get one, one to many-controller",req.params.id)
        Farm.findOne({ _id: req.params.id }).populate("_mongoose").exec((err, result) => {
            if(err) return res.status(406).json("one to many not found-controller")
            console.log('Found-one to many-controller', result)
            res.json(result)
            });
        
    },
    //should be good to go, get one with req.params

    getOneOf:function(req, res){
        console.log("get one, one to many-controller",req.session)
        let {_id} = req.session
        console.log("get one, one to many-controller",req.session)
        Farm.find({registration: req.session._id}, (err, farms)=>{
            if(err){
                return res.status(500).json("cant find one of many-controller")
            }
            res.json(farms)
        })
    },

    //should be good to go, get all from one user with req.session

    create: function(req, res){
        console.log("create, one to many-controller", req.body);
        let farm = new Farm(req.body);
        console.log("create, one to many-controller", farm);
        farm.creator = req.session.first_name;
        farm.save((errs)=>{
            if(errs){
                console.log("create, one to many-controller", errs)
                res.status(500).json(farm.errs)
            }
            else{
                res.json(true);
            }
        });
},

    //should be good to go, create one to many

    delete: function(req, res){
        console.log("delete, one to many-controller", req.params.id)
        Farm.findOneAndRemove({ _id: req.params.id }, (err, result) => {
            if(err) return res.status(406).json("one to many not deleted")
            console.log('Deleted')
            res.json(true)
        })
    },

    //need to test, delete one to many

    update: function(req, res){
        console.log('update controller, one to many', req.body)
        Farm.findOne({_id: req.params.id }, (err, farm) => {
            if(err){
                return res.status(500).json("update err one to many controller", err)
                res.json(farm)
            }
            farm.name = req.body.name;
            farm.description = req.body.description;
            farm.save ((err)=>{
                if (err) return res.status(409).json("one to many has not been updated")
                res.json(farm)
            })
        })
    },

    // //update one to many, need to test

}