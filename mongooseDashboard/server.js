var mongoose = require("mongoose");
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/mongooseDojo');

var MongooseSchema = new mongoose.Schema({
    name: String,
    color: String,
    personality: String,
    location: String,
});
  
var Mongoose = mongoose.model('mongooses', MongooseSchema);

app.get('/', function(req, res) {
    Mongoose.find({}, function(err, results){
        if(err) { console.log(err); }
        res.render('all', { mongooses: results });
    });
})

app.get('/mongooses/new', function(req, res){
    res.render('new'); 
});

app.post('/mongooses', function(req, res){
    Mongoose.create(req.body, function(err){
        if(err) { console.log(err); }
        res.redirect('/');
    });
});

app.get('/mongooses/:id', function(req, res){
    Mongoose.find({ _id: req.params.id }, function(err, response){
        if(err) { console.log(err); }
        res.render('id', { mongoose: response[0] });
    });
});

app.get('/mongooses/edit/:id', function(req, res){
    Mongoose.find({_id: req.params.id}, function(err, response){
        if(err) { console.log(err); }
        res.render('update', {mongoose: response[0]});
    });
});

app.post('/mongooses/:id', function(req, res){
    Mongoose.update({_id: req.params.id}, req.body, function(err, response){
        if(err) { console.log(err); }
        res.redirect('/mongooses/'+ req.params.id);
    });
});

app.get('/mongooses/destroy/:id', function(req, res){
    Mongoose.remove({ _id: req.params.id }, function(err, result){
        if(err) { console.log(err); }
        res.redirect('/')
    });
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});