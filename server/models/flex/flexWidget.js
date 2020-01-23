'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let FlexWidget = sequelize.define('FlexWidget', {
        name: DataTypes.STRING,
        code: DataTypes.TEXT,
        caption: DataTypes.STRING,
        description: DataTypes.STRING,
        viewTable: DataTypes.STRING,
        className: DataTypes.STRING,
        onClick: DataTypes.JSON,
        onHover: DataTypes.JSON,
        hoverStyle: DataTypes.STRING,
        style: DataTypes.JSON,
        active: DataTypes.ENUM('yes', 'no'),
        wtype: DataTypes.ENUM('Button', 'Form', 'Link', 'table', 'List', 'Nav')
        
    }, 
    {   freezeTableName: true
    });
    
    return FlexWidget;
};