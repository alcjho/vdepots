
const Model = require('../models/flex');
const fs = require('fs');
const path = require('path');

exports.index = function(req, res){
    switch(req.params.selectedType){
        case 'rows':
 
        case 'cols':
        break;

        default:
            if(req.params.id != ""){
                return Model.FlexWidget.findAll({
                    where: {
                    id: req.params.id,
                    }
                })
                .then(resp => {
                    res.send({response: resp});
                })
                .catch(err => console.log(err));
            }
        break;
    }
};

exports.all = function(req, res){
    switch(req.params.type){
        case 'button':
        default:
            if(req.params.type != ""){
                return Model.FlexWidget.findAll({
                    where: {
                    wtype: req.params.type,
                    }
                })
                .then(flex => {
                    res.send({response: flex});
                })
                .catch(err => console.log(err));
            }
        break;

        case 'rows':
        break;
    }
};

exports.find = function(req, res){
    switch(req.params.type){
        case 'button':
        default:
            if(req.params.type != ""){
                return Model.FlexWidget.findAll({
                    where: {
                    wtype: req.params.type,
                    id: req.params.id
                    }
                })
                .then(flex => {
                    res.send({response: flex});
                })
                .catch(err => console.log(err));
            }
        break;

        case 'rows':
        break;
    }
};

exports.register = function(req, res){
    switch(req.params.type){
        case 'button':{
            let { name, code, description, selectedType, disptext, width, height, color, bgcolor, borderSize, border, borderColor, borderRadius} = req.body;
            
            if(border != 'none'){
                borderStyle = borderSize + ' ' + borderColor + ' ' + border;
            }

            if(disptext == ""){
                disptext = Button;
            }

            var defaultStyle = {'width':'100%', 'color':'blue', 'height':'50px', 'bgColor':'#eeeeee', 'borderRadius': '10px', 'border': 'solid', 'borderSize':'1px', 'borderColor':'#999999'};
            
            Model.FlexWidget.create({
                name, code, wtype:selectedType, caption: disptext, description, style: defaultStyle, active:'yes'
            })
            .then(flex => {
                res.send({response: flex.id});
    
            })
            .catch(err => console.log(err));           
        }
        break;
    }
};

exports.update = function(req, res){
    switch(req.params.type){
        case 'button':{
            let {  lg, caption, width, height, color, bgcolor, borderSize, border, borderColor, borderRadius, onClick, onHover, hoverStyle } = req.body;
            
            if(border != 'none'){
                borderStyle = borderSize + ' ' + borderColor + ' ' + border;
            }
            buttonStyle  = {'width':width, 'color':color, 'height':height, 'bgColor':bgcolor, 'borderRadius': borderRadius, 'borderSize': borderSize, 'borderColor':borderColor, 'border': border}

            Model.FlexWidget.update({ 
                style: buttonStyle,
                caption,
                onClick,
                onHover,
                hoverStyle
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(flex => {
                res.send({response: 'Button ' + flex.name + ' has been update - id: ' + id});
            })
            .catch(err => console.log(err));
        }
        break;
        
        case 'form':{
            console.log(req.body);
        }
        break;

        case 'link':{
            console.log(req.body);
        }
        break;

        case 'menu':{
            console.log(req.body);
        }
        break;
    }
};

exports.remove = function(req, res){
    switch(req.params.type){
        case 'button':{
            console.log(req.body);
        }
        break;
        
        case 'form':{
            console.log(req.body);
        }
        break;

        case 'link':{
            console.log(req.body);
        }
        break;

        case 'menu':{
            console.log(req.body);
        }
        break;
    }
};


exports.load = function(req, res){
    switch(req.params.type){
        case 'button':{
            console.log(req.body);
        }
        break;
        
        case 'form':{
            console.log(req.body);
        }
        break;

        case 'link':{
            console.log(req.body);
        }
        break;

        case 'menu':{
            console.log(req.body);
        }
        break;
    }    
};


