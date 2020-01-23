var editorController = require('../controllers/EditorController');

// Routes
module.exports = function(server, app){
    console.log('test')
  /* users main page */
  server.post('/:lg/editor/component/register/:type', editorController.register);
  server.post('/:lg/editor/component/update/:type/:id', editorController.update);
  server.post('/:lg/editor/component/remove/:type', editorController.remove)
  server.get('/:lg/editor/component/all/:type', editorController.all)
  server.get('/:lg/editor/component/:type/:id', editorController.find)
};  
