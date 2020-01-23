'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let Admin = sequelize.define('Admin', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        language: DataTypes.STRING,
        company: DataTypes.STRING,
        phone1: DataTypes.STRING,
        address: DataTypes.STRING,
        type: DataTypes.ENUM('vendor', 'provider')
        
    }, 
    {   freezeTableName: true
    });
    
    return Admin;
};