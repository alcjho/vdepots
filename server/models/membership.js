'use strict';

module.exports = (sequelize, DataTypes) => {
    let Membership = sequelize.define('Membership', {
        capacity: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        isFree: DataTypes.ENUM('yes', 'no'),
        price: DataTypes.FLOAT,
        active: DataTypes.ENUM('yes', 'no'),
    },

    {   freezeTableName: true
    }); 

    return Membership;
};