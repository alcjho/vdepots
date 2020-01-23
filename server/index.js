const express = require('express');
const next = require('next');
const i18n = require('i18n-2');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const Mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejsLayout = require('express-ejs-layouts');
const http = require('http');
const path = require('path');
const config = require('./config/config');
const {User, Catalog, Admin, Portfolio} = require('./models');

const PORT = process.env.PORT || 3003
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
.prepare()
.then( () => {

    const server = express();

    /**
     * Setting handlebar listening port
     */
    server.set('port', config.admin.app.port);


    /**
     * Setting up a directory for views
     */
    server.set('views', path.join(__dirname, 'views'));


    /**
     * configure languages middleware for french and english using cookie
     */
    i18n.expressBind(server, {
        locales: ['fr', 'en'],
        defaultLocale: 'en',
        cookieName: 'mylang',
        extension: '.json',
    });    


    /**
     * Handlebar template - intial middleware setup
     */
    server.use(ejsLayout);
    server.set('view engine', 'html');
    server.engine('html', ejs.renderFile);
    server.set('layout', 'layouts/main');    


    /**
     * Initializing Language module (i18n use the cookie set by the client to initialize the language)
     * without cookie, the default language will prevail.
     */
    server.use(function(req, res, next) {
        req.i18n.setLocaleFromCookie();
        next();
    });
    
    
    /**
     * External directory specification for medias
     */
    server.use(express.static(path.join(__dirname, 'public')));    


    /**
     * parse ajax request
     */
    server.use(bodyParser.json());


    /**
     * parse application/x-www-form-urlencoded
     */
    server.use(bodyParser.urlencoded({ extended: false }));


    /**
     * session middleware
     * var expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
     */
    server.use(session({
        secret: '_abcd1234',
        resave: false,
        saveUninitialized: true,
        cookie: { 
            maxAge: 3456000 // 60 minutes
        }
    }));
    

    require('./routes/home')(server, app);
    require('./routes/users')(server, app);
    require('./routes/admin')(server, app);
    require('./routes/catalogs')(server, app);
    require('./routes/portfolio')(server, app);
    require('./routes/editor')(server, app);

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(PORT, err => {
        if(err) throw err;
        console.log(`> Read on ${PORT}`);
    })
})
.catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});