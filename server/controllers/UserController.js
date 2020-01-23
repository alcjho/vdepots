const Model = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { check, validationResult } = require('express-validator/check');

//main validation method for users form
exports.validate = function(method) {
    switch(method){
        case 'add':{
            return [
                check('password', "Must be 5 characters or more").isLength({ min:5 }),
                check('firstname', "a firstname is required").exists(),
                check('lastname', "a lastname is required").exists(),
                check('location', "Your current location is required").exists(),
                check('email')
                    .exists().withMessage("An email is required")
                    .isEmail().withMessage("Wrong email format"),
                check('phone')
                    .optional()
                    .isMobilePhone().withMessage("wrong phone format")
            ]
        }
        break;
    }
}



exports.index = function(req, res){
    Model.User.findAll({
        order:[['id', 'DESC']]
    })
    .then(function(result) {
        res.render('users/index', {users: result, language: req.params.lg});
    })
};


exports.logout = function(req, res){
   //switch language;
   if(!req.params.lg){
        req.i18n.locale = 'en';
        lglink = 'fr';
        lg = 'en';
    }else{
        req.i18n.locale = req.params.lg;
        lglink = (req.params.lg == 'fr')?'en':'fr';
        lg = req.params.lg;
    } 

    req.session.destroy();
    res.redirect('/'+lg+'/users/login');
}


exports.login = function(req, res){
    //switch language;
    if(!req.params.lg){
        req.i18n.locale = 'en';
        lglink = 'fr';
        lg = 'en';
    }else{
        req.i18n.locale = req.params.lg;
        lglink = (req.params.lg == 'fr')?'en':'fr';
        lg = req.params.lg;
    }
    
    try{
        const errors = validationResult(req);

        if(req.method == "POST"){
            if (!errors.isEmpty()) {
                res.render('users/login', {errors: errors.array()});
                return;
            }
            authorize(req, res, lg);

        }else if(req.method == "GET"){
                res.render('users/login',
                {
                    homelink: req.i18n.__("Home"),
                    signuplink: req.i18n.__("Signup"),
                    loginlink: req.i18n.__("Login"),
                    lglink: lglink,
                    lgview:'users/login',
                    lang: lg,
                    forgot_password: req.i18n.__("Forgot your password?"),
                    username: req.i18n.__("Your username"),
                    password: req.i18n.__("Your password"),
                    submit: req.i18n.__("Submit"),
                    remember: req.i18n.__("Remember me"),
                    having_account: req.i18n.__("Don't have an account?"),
                    signup: req.i18n.__("Signup"),
                    loginTitle: req.i18n.__("login"),
                    password_length_error: req.i18n.__("Must be 5 characters or more?"),
                    wrong_email_error: req.i18n.__("Wrong email format"),
                    wrong_phone_error: req.i18n.__("Wrong phone format")
                }
            );
        }
    }catch(err){
        return err;
    }
};


var authorize = function(req, res, lg){
    Model.User.findAll({
        where: {
            username: req.body.username
        }
    })
    .then(data => {
        return data.map(function(result) {
            bcrypt.compare(req.body.password, result.password, function(err, resp) {
                if(resp){
                    req.session.username = result.username;
                    req.session.userid = result.id;
                    req.session.email = result.email;
                    req.session.firstname = result.firstname;
                    req.session.lastname = result.lastname;                   
                    res.redirect('/'+lg+'/admin/');
                }else{
                    res.redirect('/'+lg+'/users/login');
                }
            });
        });
    })
};



var user_exists = function(username){
   return Model.User.findAll({
            where: {
            username: username
        }
    });
}



exports.add = function(req, res, next){
    //get user exists promisE
    exists = user_exists(req.body.email);
    
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.send({response:errors.array()});   
            return;
        }

        exists.then(result => {
            if(Object.keys(result).length == 0){
                let {firstname, lastname, phone, company, location, email, password_b, utype} = req.body;
                switch(req.body.utype) {
                    case 'vendor':
                        bcrypt.hash(req.body.password, 10, function(err, hash){
                            Model.User.create({
                                firstname, lastname, email, username: email, password:hash, company, phone1 : phone, address: location, type : utype
                            })
                            .then(user => {
                                res.send({response: user.id + ' - A new vendor has been created'});
                            })
                            .catch(err => console.log(err));
                        });
            
                    break;

                    case 'buyer':
                        res.send({response: 'Buyer form'});
                    break;
                    case 'provider':
                            Model.User.create({
                                firstname, lastname, email, username: email, password, company, phone1 : phone, address: location, type : utype
                            })
                            .then(user => {
                                res.send({response: user.id + ' - A new vendor has been created'});
                            })
                            .catch(err => console.log(err));
                    break;          
                    default:
                        res.send({response: 'No request found'});
                }
            }else{
                res.send({response: {"errors":[{"location":"body","param":"password","value":"","msg":"User already exists"}]}});
            }
        })
    
    }catch(err){
       return next(err)
    }
};



exports.edit = function(req, res){
    res.render('users');
};



exports.search = function(req, res){
    res.render('users/search/:id');
};