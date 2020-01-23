var HomeController = require('../controllers/HomeController');
var UserController = require('../controllers/UserController');

module.exports = function(server, app){
    /* Welcome page */
    server.get('/', HomeController.index);

    /* Welcome page */
    server.get('/:lg/', HomeController.index);

    // server.get('/contact', (req, res) => {
    //     return app.render(req, res, '/server/form.js', req.query)
    // })
}