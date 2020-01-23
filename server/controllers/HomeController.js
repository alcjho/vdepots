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

    res.render('home/index', 
        {
            lglink: lglink,
            lgview:'',
            lang:lg            
        }
    );
};
 
exports.search = function(req, res){
    res.render('home/search/');
};