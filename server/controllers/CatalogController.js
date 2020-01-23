const Model = require('../models');
const { body, validationResult } = require('express-validator/check');

//main validation method for users form
exports.validate = function(method) {
    switch(method){
        case 'add':{
            return [
                body('catname', "A name is required for this catalog").exists(),
                body('capacity', "A capacity is required for this catalog").exists(),
                body('catalog_type', "A catalog type is required").exists()
            ]
        }
        break;
        case 'change':{
            return [
                // body('password', "Must be 5 characters or more").isLength({ min:5 }),
                // body('firstname', "a firstname is required").exists(),
                // body('lastname', "a lastname is required").exists(),
                // body('location', "Your current location is required").exists(),
                // body('email')
                //     .exists().withMessage("An email is required")
                //     .isEmail().withMessage("Wrong email format"),
                // body('phone')
                //     .optional()
                //     .isMobilePhone().withMessage("wrong phone format")
            ]
        }
        break;
    }
}

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

    catalogs = load(req, res, lg);
    portfolio = loadPortfolio(req, res, lg);

    if (req.session.username){

        catalogs.then(result => {
            res.render('admin/catalog/index', 
                {
                admin: 'admin', 
                layout:'layouts/admin',
                lglink: lglink,
                lgview:'catalog',
                lang: lg,
                dispname: req.session.firstname,
                error_visible: "none",
                success_visible: "none",
                TRENDING:{title: req.i18n.__("MOST VALUABLE PRODUCTS"), action: req.i18n.__("Add to cart")},
                NAV:false,
                LIST:{title1: req.i18n.__("AVAILABLE"), title2: req.i18n.__("PRODUCTS"), action: req.i18n.__("Details")},
                catalogs: result,
                update_success: req.i18n.__("Catalog successfully updated!"),
                update_failure: req.i18n.__("Failed to update catalog!"),
                rm_success: req.i18n.__("Catalog successfully removed!"),
                rm_failure: req.i18n.__("Failed to remove catalog!"),
            });
        })
    }else{
        res.redirect('/'+lg+'/users/login');
    }    
}


exports.manage = function(req, res){
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

    if (req.session.username){
        res.render('admin/catalog/manage', 
        {
            admin: 'admin', 
            layout:'admin',
            lglink: lglink,
            lgview:'catalog',
            lang:lg,
            TRENDING:{title: req.i18n.__("MOST VALUABLE PRODUCTS"), action: req.i18n.__("Add to cart")},
            NAV:false,
            LIST:{title1: req.i18n.__("AVAILABLE"), title2: req.i18n.__("PRODUCTS"), action: req.i18n.__("Details")},
        });
    }else{
        res.redirect('/'+lg+'/users/login');
    }    
}


var catalog_exists = function(catname, userid){
    return Model.Catalog.findAll({
             where: {
             userid: userid,
             catname: catname
         }
     });
 }

exports.add = function(req, res, next){
   //get Catalog existing promisE
   exists = catalog_exists(req.body.catname, req.session.userid);
    
   try{
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           res.status(422).json({ errors: errors.array() });
           return;
       }

       exists.then(result => {
           if(Object.keys(result).length == 0){
               
               let {catname, capacity, catalog_type, allow_trending, trending_size, trending_per_page, allow_listing, listing_size, listing_per_page, description} = req.body;
                Model.Catalog.create({
                    catname, UserId:req.session.userid, capacity, catalog_type, trending:allow_trending, trending_size, trending_per_page, listing:allow_listing, listing_size, listing_per_page, active:'yes', description
                })
                .then(catalog => {
                    res.redirect('/' + req.params.lg + '/admin/catalog/');
                })

           }else{
                res.redirect('/' + req.params.lg + '/admin/catalog/');
           }
       })
   
   }catch(err){
      return next(err)
   }
};


var load = function(req, res, lg){
    return Model.Catalog.findAll({
             where: {
             userid: req.session.userid,
         }
     });
 }

 var loadPortfolio = function(req, res, lg){
    if(req.session.userid){
        return Model.Portfolio.findAll({
                where: {
                userid: req.session.userid,
            }
        });
    }
    
 }



 exports.update = function(req, res){
    Model.Catalog.update({
            'catname':req.body.catalog[0], 
            'capacity':req.body.catalog[1], 
            'trending':req.body.catalog[2],
            'trending_per_page':req.body.catalog[3],
            'listing':req.body.catalog[4],
            'listing_per_page':req.body.catalog[5],
            'description':req.body.catalog[6]
        }, 
        {
            where: {
            userid: req.session.userid,
            id: req.params.catid
        }
     }).then((result) => {
        res.send({"success": req.params.catid});
        return result;
     }).catch(function(err){
        res.send({"failure": req.params.catid});
        return err;
     });
 }

 exports.remove = function(req, res){
    Model.Catalog.destroy({
        where: {
            userid: req.session.userid,
            id: req.params.catid
        }
     }).then((result) => {
        res.send({"success": req.params.catid});
        return result;
     }).catch(function(err){
        res.send({"failure": req.params.catid});
        return err;
     });
     
 }