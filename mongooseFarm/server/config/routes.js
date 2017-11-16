var registrations = require('../controllers/registration.js');
var mongoose = require('../controllers/mongoose.js')
var farm = require('../controllers/farm.js')
let path = require('path')

module.exports = function(app){
    app.post('/api/registration', registrations.create);
    // app.post('/api/login', registrations.login);
    app.get('/api/logout', registrations.logout);
    app.get('/api/user', registrations.getUser);
    app.post('/api/farm/new', farm.create);
    app.post('/api/mongoose/new/:id', mongoose.create);
    app.get('/api/farms', farm.getAll);
    app.get('/api/mongooses', mongoose.getAll);
    app.get('/api/farm/:id', farm.getOne);
    // app.get('/api/mongoose/:id', mongoose.getOne);
    // app.get('/api/farms/:id', farm.getOneOf);
    app.delete('/api/farm/:id', farm.delete);
    app.delete('/api/mongoose/:id', mongoose.delete);
    app.get('/api/updatefarm/:id', farm.update);
    app.get('/api/updatemongoose/:id', mongoose.update);
    app.all('*', (req, res)=>{
        res.sendFile(path.resolve('./public/dist/index.html'))
    })

}