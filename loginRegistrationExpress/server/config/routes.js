var registrations = require('../controllers/registration.js');

module.exports = function(app){
    app.get('/', function(req, res) {
        res.render('registration');
    });

    app.post('/registration', function(req, res){
        registrations.create(req, res)
    });

    app.post('/login', function(req, res){
        registrations.login(req, res)
    });

    app.get('/registration', function(req, res){
        if(!req.session.registration_id){
            res.redirect("/");
        }
        else{
        registrations.getAll(req, res)
        }
    });

}