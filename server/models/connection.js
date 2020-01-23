const mysql = require('mysql2');
var config = require('../config/config.js');

port = process.env.PORT || 4205;

if (port === 3000) {
    var connection = mysql.createPool({
        connectionLimit: 100,
        host: config.dev.db.host,
        user: config.dev.db.user,
        password: config.dev.db.pass,
        database: config.dev.db.name
    });
} else {
    var connection = mysql.createPool({
        connectionLimit: 10000,
        host: config.prod.db.host,
        user: config.prod.db.user,
        password: config.prod.db.pass,
        database: config.prod.db.name
    });
}

connection.execute;
module.exports = connection;