var registrations = require('../controllers/registration.js');
var bike = require('../controllers/bike.js');
let path = require('path')

module.exports = function(app){
    app.post('/api/registration', registrations.create);

    app.post('/api/login', registrations.login);
    app.get('/api/logout', registrations.logout);
    app.get('/api/user', registrations.getUser);
    app.post('/api/bike/new', bike.create);
    app.get('/api/bike/listings', bike.getBike);
    app.delete('/api/bike/:id', bike.delete);
    app.get('/api/bikes', bike.getAll);
    app.put('/api/bike/:id', bike.update);
    app.get('/api/contacts/:id', registrations.contactUser)
    app.get('/api/bikes/:search', bike.search)
    //restfulish routes

    app.all('*', (req, res)=>{
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
    //this redirects back to home page if not logged in
}