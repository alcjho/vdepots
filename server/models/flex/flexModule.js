'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let FlexModule = sequelize.define('FlexModule', {
        name: DataTypes.STRING,
        version: DataTypes.STRING,
        location: DataTypes.STRING,
        description: DataTypes.STRING,
        previous_version: DataTypes.STRING,
        active: DataTypes.ENUM('yes', 'no')
        
    }, 
    {   freezeTableName: true
    });
    
    return FlexModule;
};