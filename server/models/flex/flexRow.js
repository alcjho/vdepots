'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let FlexRow = sequelize.define('FlexRow', {
        id_parent_col: DataTypes.INTEGER,
        id_container: DataTypes.INTEGER,
        posision: DataTypes.INTEGER,
        className: DataTypes.ENUM('row-fluid', 'row'),
        row_style: DataTypes.JSON,
        dimensions: DataTypes.JSON,
        
    }, 
    {   freezeTableName: true
    });
    
    return FlexRow;
};