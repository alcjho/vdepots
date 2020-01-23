const Model = require('../models/flex/');


exports.index = function(req, res){
    obj =  
    [ 
        {
            "name": 'header1',
            "type": 'module',
            "id": 7,
            "style": {"width": "100%", "height":"100px"},
            "container":{"fluid": 0, "border": "1px solid #cccccc", "bgcolor":"#eeeeee"},
            "rows":[
                {
                    "id": "1",
                    "style":{"border":"", "borderColor":"#eee", "bgColor":""},
                    "col":"0",
                    "order":"1",
                },
                {
                    "id": "1",
                    "style":{"border":"", "borderColor":"#eee", "bgColor":""},
                    "col":"0",
                    "order":"1",
                }
            ],

            "cols":[
                {
                    "id": "1",
                    "rowid": "1",
                    "mobileClass":"col-sm-12",
                    "tabletClass":"col-md-12",
                    "deskClass":"col-lg-12",                                
                    "style":{"border":"1px solid #eeeeee", "height":"300px", "backgroundColor":"#fff"},
                    "order":"1"                                
                }                         
            ]
        }
    ]


    page =  
    [ 
        {
            "name": 'header1',
            "type": 'page',
            "id": 7,
            "style": {"width": "100%", "height":"100px"},
            "container":{"fluid": 0, "border": "1px solid #cccccc", "bgcolor":"#eeeeee"},
            "rows":[
                {
                    "id": "1",
                    "style":{"border":"", "borderColor":"#eee", "bgColor":""},
                    "col":"0",
                    "order":"1",
                },
                {
                    "id": "1",
                    "style":{"border":"", "borderColor":"#eee", "bgColor":""},
                    "col":"0",
                    "order":"1",
                }
            ],

            "cols":[
                {
                    "id": "1",
                    "rowid": "1",
                    "mobileClass":"col-sm-12",
                    "tabletClass":"col-md-12",
                    "deskClass":"col-lg-12",                                
                    "style":{"border":"1px solid #eeeeee", "height":"300px", "backgroundColor":"#fff"},
                    "order":"1"                                
                }                         
            ]
        }
    ]    

    
    const fs = require('fs');
    var path = require('path');
    var appDir = path.dirname(require.main.filename);
    fname = obj[0].name;
    var json = JSON.stringify(obj);

    const content = 'Some content!'
    
    fs.writeFileSync(appDir +'/flexEditor/data/'+fname+".json", json, (err) => {
        if (err) {
        console.error(err)
        return
        }
    })

    // const loadData = (appDir) => {
    //     try {
    //       return fs.readFileSync(appDir, 'utf8')
    //     } catch (err) {
    //       console.error(err)
    //       return false
    //     }
    //   }
}

exports.add = function(req, res){
    switch(req.params.what){
        case 'widget':
            {

            }
            break;

        case 'page' :
            {
                let {name, body, title_fr, title_en, route_fr, route_en, global_style, active} = req.body;
                Model.FlexPage.create({
                    name, body, title_fr, title_en: route_fr, route_en, global_style, active
                })
            }
            break;

        case 'container' :
            {

            }
            break;
        
        case 'Module' :
            {

            }
            breaks;

        case 'column' :
            {

            }
            breaks;
            
        case 'row' :
            {

            }
            breaks;         
    }
}
