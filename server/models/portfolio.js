'use strict';

module.exports = (sequelize, DataTypes) => {
    let Portfolio = sequelize.define('Portfolio', {
        capacity: DataTypes.INTEGER,
        total_items: DataTypes.INTEGER,
        name: DataTypes.STRING,
        type: DataTypes.ENUM('product', 'service'),
        active: DataTypes.ENUM('yes', 'no')   
    },

    {   freezeTableName: true
    }); 

    return Portfolio;
};