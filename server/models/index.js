//load database global configuration file for dev
const config = require('../config/config')

// load mysql ORM models
const Sequelize = require('sequelize');
const UserModel = require('../models/user');
const CatalogModel = require('../models/catalog');
const AdminModel = require('../models/admin');
const PortfolioModel = require('../models/portfolio');
const MembershipModel = require('../models/membership');

const FlexPage = require('../models/flex/flexPage');
const FlexWidget = require('../models/flex/flexWidget');
const FlexContainer = require('../models/flex/flexContainer');
const FlexRow = require('../models/flex/flexRow');
const FlexCol = require('../models/flex/flexCol');
const FlexModule = require('../models/flex/flexModule');


const sequelize = new Sequelize(
  
  config.env.db.name,
  config.env.db.user,
  config.env.db.pass, 
  {
    host: config.env.db.host,
    dialect:'mysql',
    pool:
      {
        max: 100,
        min:0,
        acquire: 30000,
        idle:10000
      }
  });

const User = UserModel(sequelize, Sequelize)
const Catalog = CatalogModel(sequelize, Sequelize)
const Admin = AdminModel(sequelize, Sequelize)
const Portfolio = PortfolioModel(sequelize, Sequelize);
const Membership = MembershipModel(sequelize, Sequelize)

//associations / relationships
Catalog.belongsTo(User, 
{
  foreignKey: {
    allowNull: true
  }
});

Portfolio.hasMany(Catalog,
{
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false
    }
});

Portfolio.belongsTo(Membership,
{
  onDelete: "CASCADE",
  foreignKey: {
    allowNull: true
  }
})

User.hasMany(Portfolio, 
{
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false
    }
});

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
})

module.exports = {
  User,
  Catalog,
  Admin,
  Portfolio,
  Membership
}