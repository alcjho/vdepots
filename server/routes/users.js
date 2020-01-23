var userController = require('../controllers/UserController');
const { check } = require('express-validator/check');

// Routes
module.exports = function(server, app){

  /* users main page */
  server.get('/users', userController.index);
  server.get('/users/logout', userController.logout);
  server.get('/:lg/users/logout', userController.logout);
  server.get('/users/login', userController.login);
  server.get('/:lg/users/login', userController.login);


  //app.post('/users/login', userController.validate('login'), userController.login);
  server.post('/:lg/users/login', userController.login);

  server.post('/users/add', 
      check('password_b').custom((value, { req }) => {
        if (value !== req.body.password) {
          return false
        }else{
          return true
        }
      }).withMessage("Passwords don't match"),
      userController.validate('add'),
      userController.add
  );

};  
