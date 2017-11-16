var mongoose = require('mongoose');
var Farm = mongoose.model('Farm');
var Mongoose = mongoose.model('Mongoose');
//require mongoose, import models

module.exports = {
    getAll: function(req, res) {
        console.log("getAll many to one-controller")
        Mongoose.find({}, function(err, results){
            if(err) { console.log(err); }
            res.json(results);
        });
    },
    //should be good to go, getAll many to one

    getOne:function(req, res){
        console.log("getOne many to one-controller")
        Mongoose.findOne({ _id: req.params.id }, (err, result) => {
            if(err) return res.status(406).json("Farm not found")
            console.log('Found many to one-controller')
            res.json(true)
        })
    },
    //original getOne, new one not tested

    // getOne:function(req, res){
    //     console.log("get one, many to one -controller",req.params.id)
    //     Mongoose.findOne({ _id: req.params.id }).populate("_answer").exec((err, result) => {
    //         if(err) return res.status(406).json("many to one not found-controller")
    //         console.log('Found-many to one-controller', result)
    //         res.json(result)
    //         });
        
    // },

    create: function(req, res){
        console.log('create, many to one- controller', req.body)
                Farm.findOne({_id:req.params.id}, (err, farm)=>{
                    if(err){
                        console.log(err)
                        return res.status(502).json(err)
                    }
                    console.log("create-many to one-controller", farm)
                    let mongoose = new Mongoose();
                    mongoose.name = req.body.name;
                    mongoose.age = req.body.age;
                    mongoose.sponsor = req.session.first_name;
                    mongoose.likes = 0
                    mongoose._farm = farm._id;
                    
                    mongoose.save((err)=>{
                        farm._mongoose.push(mongoose);
                        farm.save ((err)=>{
                            if (err) return res.status(409).json("one to many, create, controller")
                            res.json(true)
                        })
                    });
                    
                })
                
    },

    update: function(req, res){
        console.log("update controller, many to one", req.params)
        Mongoose.findOne({_id:req.params.id}, (err, mongoose) =>{
            if(err){
                return res.status(502).json(err)
            }
            console.log("update controller, many to one", mongoose)
            mongoose.likes += 1
            mongoose.save((err) =>{
                if (err) return res.status(409).json("many to one has not been updated")
                res.json(true)
            })
        })
    },

    delete: function(req, res){
        Mongoose.findOneAndRemove({ _id: req.params.id }, (err, result) => {
            console.log("delete controller, many to one")
            if(err) return res.status(406).json("many to one not deleted")
            console.log('Deleted-controller')
            res.json(true)
        })
    },


    // update: function(req, res){
    //     console.log('update controller', req.body)
    //     Bike.findOne({_id: req.params.id }, (err, bike) => {
    //         if(err){
    //             return res.status(500).json("cant find bike")
    //             res.json(bikes)
    //         }
    //         bike.title = req.body.title;
    //         bike.description = req.body.description;
    //         bike.price = req.body.price;
    //         bike.location = req.body.location;
    //         bike.save ((err)=>{
    //             if (err) return res.status(409).json("Bike has not been updated")
    //             res.json(bike)
    //         })
    //     })
    // },
}