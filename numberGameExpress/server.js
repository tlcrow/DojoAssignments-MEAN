// require express
let express = require("express");
// path module -- try to figure out where and why we use this
let path = require("path");
// create the express app
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(session({secret: 'thisissecret'}));
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view


app.get('/', function(req, res) {
        req.session.number = Math.floor(Math.random()* 101)
        res.render("index", {number:req.session.number})
    
});

app.post('/', function(req, res){
    const guess = parseInt(req.body.guess);
    if(guess == NaN){
        req.session.hint = "Not a number";
        return res.render("index", {hint: req.session.hint});
    }
    else if(req.session.number < guess){
        return res.render("greater", {number:req.body.guess})
    }
    else if(req.session.number > guess){
        return res.render("lesser", {number:req.body.guess})
    }
    else{
    return res.render("result", {number:req.session.number});
    }

});

app.post('/results', function (req, res){
    req.session.number = null;
    res.redirect("/");
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
   });