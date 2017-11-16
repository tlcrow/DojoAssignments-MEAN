// require express
let express = require("express");
// path module -- try to figure out where and why we use this
let path = require("path");
// create the express app
let app = express();
let bodyParser = require('body-parser');
// use it!
let session = require('express-session');
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.use(session({secret: 'thisissecret'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res){
    res.render("counter");
})

app.get('/counter', function(req, res) {
    if(req.session.count != null || req.session.count != undefined){
        req.session.count++;
    }
    // if(! 'count' in req.session)
    else{
        req.session.count = 0;
    }
    res.render("index", {count:req.session.count});
})
app.get('/clear', function(req, res){
    req.session.count = 0;
    res.render("index", {count:req.session.count});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
