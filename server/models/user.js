'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        language: DataTypes.STRING,
        company: DataTypes.STRING,
        phone1: DataTypes.STRING,
        address: DataTypes.STRING,
        type: DataTypes.ENUM('vendor', 'provider'),
        default_catalog: DataTypes.INTEGER
    },
    
    {   
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },

            validPassword(password){
                return bcrypt.compare(password, this.password);
            }
        }
    });
    
    return User;
};