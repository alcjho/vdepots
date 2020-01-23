var path = require('path');

var config = {};
config.dev = {
    db:{
        name: 'flexdb',
        host: 'localhost',
        user: 'finley',
        pass: 'password'
    },

    def:{
        assets: path.join(__dirname, 'public'),
        views:  path.join(__dirname, 'views')
    },

    app:{
        port: '3000'
    }
};

config.admin = {
    db:{
        name: 'flexdb',
        host: 'localhost',
        user: 'finley',
        pass: 'password'
    },

    def:{
        assets: path.join(__dirname, 'public'),
        views:  path.join(__dirname, 'views')
    },

    app:{
        port: '3003'
    }
};

config.prod = {
    db:{
        name: 'xsellsco_flexdb',
        host: 'localhost',
        user: 'xsellsco_finley',
        pass: '_Passwd01'
    },

    def:{
        assets: path.join(__dirname, 'public'),
        views:  path.join(__dirname, 'views')
    },

    app:{
        port: '30123'
    }
};

config.env = config.dev;
module.exports = config;