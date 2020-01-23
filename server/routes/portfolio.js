var PortfolioController = require('../controllers/PortfolioController');

// Routes
module.exports = function(server, app){

    /* product routes */
    server.get('/:lg/admin/portfolio/', PortfolioController.index);

    /* add a portfolio */
    server.post('/:lg/admin/portfolio/:action', PortfolioController.add);


    /* display specific porfolio data */
    server.get('/:lg/admin/portfolio/pfid/:id', PortfolioController.get);
};