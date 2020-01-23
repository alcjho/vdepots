const Model = require('../models');
exports.index = function(req, res){
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

    
    if(req.session.username){
        
        res.render('admin', 
            {
                layout:'layouts/admin', 
                admin: 'admin', 
                lang: lg, 
                lglink: lglink, 
                lgview:'admin', 
                userid: req.session.userid,
                dispname: req.session.firstname
            }
        );

    }else{
        res.redirect('/'+lg+'/users/login');
    }
}