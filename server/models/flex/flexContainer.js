'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let FlexContainer = sequelize.define('FlexContainer', {
        id_page: DataTypes.INTEGER,
        posision: DataTypes.INTEGER,
        className: DataTypes.ENUM('container-fluid', 'container'),
        col_xs: DataTypes.INTEGER,
        dimensions: DataTypes.JSON,
        style: DataTypes.JSON,
        active: DataTypes.ENUM('yes', 'no')
        
    }, 
    {   freezeTableName: true
    });
    
    return FlexContainer;
};