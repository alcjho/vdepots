const Model = require('../models');
const { body, validationResult } = require('express-validator/check');
//const moduser = require('../lib/users');

exports.index = function(req, res){
    
    if (req.session.username){
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

        portfolios = load(req, res, lg);
        memberships = loadPlans(req, res, lg);

        portfolios.then(result => {
            memberships.then(plans => {
                res.render('admin/portfolio/index', 
                    {
                    admin: 'admin', 
                    layout:'layouts/admin',
                    lglink: lglink,
                    lgview:'catalog',
                    dispname: req.session.firstname,
                    lang:lg,
                    error_visible: "none",
                    success_visible: "none",
                    TRENDING:{title: req.i18n.__("MOST VALUABLE PRODUCTS"), action: req.i18n.__("Add to cart")},
                    NAV:false,
                    LIST:{title1: req.i18n.__("AVAILABLE"), title2: req.i18n.__("PRODUCTS"), action: req.i18n.__("Details")},
                    portfolio: result,
                    membership: plans,
                    update_success: req.i18n.__("Catalog successfully updated!"),
                    update_failure: req.i18n.__("Failed to update catalog!"),
                    rm_success: req.i18n.__("Catalog successfully removed!"),
                    rm_failure: req.i18n.__("Failed to remove catalog!"),
                });
            })
        })
    }else{
        res.redirect('/'+lg+'/users/login');
    }
}


var portfolio_exists = function(name, userid){
    if(userid){
        return Model.Portfolio.findAll({
                where: {
                name: name,
                userid: userid,
            }
        });
    }else{
        return null;
    }
 }

 var load = function(req, res, lg){
    if(req.session.userid){
        return Model.Portfolio.findAll({
                where: {
                userid: req.session.userid,
            }
        });
    }
    
 }

 var portfolio_catalogs = function(req, res, lg){
    return Model.Catalog.findAll({
            where: {
            userid: req.session.userid,
            PortfolioId: req.params.id
         }
     });
 }


 var loadPlans = function(req, res, lg){
    if(req.session.userid){
        return Model.Membership.findAll({
            where: {
                active: 'yes',
            }
        })
    }   
 }


 exports.get = function(req, res, lg) {
     if(req.session.userid){
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

        if(req.params.id != ""){
            Model.Portfolio.findAll({
                where: {
                    userid: req.session.userid,
                    id: req.params.id
                },
                include: [Model.Membership]
            }).then(result => {
                portfolio_catalogs(req, res, lg).then(catalogs => {
                    res.render('admin/portfolio/pfid',
                        {
                            layout:'layouts/admin',
                            portfolio: result[0],
                            catalogs:catalogs,
                            admin: 'admin', 
                            lglink: lglink,
                            lgview:'portfolio/pflid',
                            dispname: req.session.firstname,
                            lang:lg,
                            req: req
                        }
                    );               
                });
            }) 
        }        
     }
 }


 exports.add = function(req, res, next){
    //get Catalog existing promisE{}
    exists = portfolio_exists(req.body.pflname, req.session.userid);
    
    if(req.params.action == 'add'){
        try{
            exists.then(result => {
                if(Object.keys(result).length == 0){
                    
                    let {pflname, capacity, plan, pfltype, description, active} = req.body;
                    Model.Portfolio.create({
                        MembershipId: plan,
                        name: pflname, 
                        UserId:req.session.userid, 
                        active:'yes', 
                        type:pfltype
                    })
                    .then(portfolio => {
                        res.send({success:'1'});
                    })
    
                }else{
                    res.send({'error':'An error occurs'});
                }
            })
        
        }catch(err){
        return next(err)
        }
    }
}
 