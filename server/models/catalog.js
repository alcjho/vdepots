'use strict';

module.exports = (sequelize, DataTypes) => {
    let Catalog = sequelize.define('Catalog', {
        catname: DataTypes.STRING,
        capacity: DataTypes.STRING,
        catalog_type: DataTypes.ENUM('product', 'service'),
        trending: DataTypes.ENUM('yes', 'no'),
        trending_size: DataTypes.INTEGER,
        trending_max_size: DataTypes.INTEGER,
        trending_per_page: DataTypes.INTEGER,
        listing: DataTypes.ENUM('yes', 'no'),
        listing_size: DataTypes.INTEGER,
        listing_per_page: DataTypes.INTEGER,
        active: DataTypes.ENUM('default', 'yes', 'no'),
        description: DataTypes.TEXT    
    }, 
    {   freezeTableName: true
    });

    return Catalog;
};