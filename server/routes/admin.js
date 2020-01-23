var AdminController = require('../controllers/AdminController');
var PortfolioController = require('../controllers/PortfolioController');
var FlexController = require('../controllers/FlexController');

// Routes
module.exports = function(server, app){

  /* users main page */
  server.get("/:lg/admin/", AdminController.index);

  /* users main page */
  server.get("/admin/", AdminController.index);

  /* users portfolio home */
  server.get("/:lg/admin/portfolio/", PortfolioController.index);

  server.get("/:lg/admin/flex/", FlexController.index);

  server.get("/:lg/admin/flex/add/:what", FlexController.add);

}

