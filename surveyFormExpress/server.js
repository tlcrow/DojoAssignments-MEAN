// require express
let express = require("express");
// path module -- try to figure out where and why we use this
let path = require("path");
// create the express app
let app = express();
let bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view


app.get('/', function(req, res) {
    res.render("index");
})

app.post('/results', function (req, res){
    const body = {
        name:req.body.name,
        location:req.body.location,
        language:req.body.language,
        comments:req.body.comments
    }
    res.render("results", {body:body});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
