'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let FlexPage = sequelize.define('FlexPage', {
        name: DataTypes.STRING,
        body: DataTypes.JSON,
        title_fr: DataTypes.STRING,
        title_en: DataTypes.STRING,
        route_fr: DataTypes.STRING,
        route_en: DataTypes.STRING,
        col_xs: DataTypes.INTEGER,
        global_style: DataTypes.JSON,
        active: DataTypes.ENUM('yes', 'no')
        
    }, 
    {   freezeTableName: true
    });
    
    return FlexPage;
};