var CatalogController = require('../controllers/CatalogController');

// Routes
module.exports = function(server, app){

    /* product routes */
    server.get('/:lg/admin/catalog/', CatalogController.index);
     
    /* product routes */
    server.post('/:lg/admin/catalog/', CatalogController.add);

    /* product routes */
    server.get('/:lg/admin/catalog/:id/manage', CatalogController.manage);

    /* product route to remove catalog */
    server.get('/:lg/admin/catalog/remove/:catid', CatalogController.remove);

    /* product route to remove catalog */
    server.post('/:lg/admin/catalog/update/:catid', CatalogController.update);


};