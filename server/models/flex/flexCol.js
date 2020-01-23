'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let FlexCol = sequelize.define('FlexCol', {
        id_row: DataTypes.INTEGER,
        col_md: DataTypes.INTEGER,
        col_lg: DataTypes.INTEGER,
        col_sm: DataTypes.INTEGER,
        col_xs: DataTypes.INTEGER,
        position: DataTypes.INTEGER,
        dimensions: DataTypes.JSON,
        col_style: DataTypes.JSON,
        active: DataTypes.ENUM('yes', 'no')
        
    }, 
    {   freezeTableName: true
    });
    
    return FlexCol;
};