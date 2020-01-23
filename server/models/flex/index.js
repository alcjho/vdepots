//load database global configuration file for dev
const config = require('../../config/config')
//load sequelize
const Sequelize = require('sequelize');

// load mysql ORM models
const PageModel = require('../../models/flex/flexPage');
const WidgetModel = require('../../models/flex/flexWidget');
const ContainerModel = require('../../models/flex/flexContainer');
const RowModel = require('../../models/flex/flexRow');
const ColModel = require('../../models/flex/flexCol');
const ModuleModel = require('../../models/flex/FlexModule');


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


const FlexWidget = WidgetModel(sequelize, Sequelize);
const FlexPage = PageModel(sequelize, Sequelize);
const FlexRow = RowModel(sequelize, Sequelize);
const FlexCol = ColModel(sequelize, Sequelize);
const FlexContainer = ContainerModel(sequelize, Sequelize);
const FlexModule = ModuleModel(sequelize, Sequelize);

//associations / relationships
FlexModule.hasMany(FlexWidget,
{
    onDelete: "CASCADE",
    foreignKey: {
        allowNull: true
    }
})


FlexContainer.hasMany(FlexRow,
{
    onDelete: "CASCADE",
    foreignKey: {
        allowNull: true
    }
})

FlexRow.hasMany(FlexCol,
{
    onDelete: "CASCADE",
    foreignKey: {
        allowNull: true
    }
})


FlexPage.hasMany(FlexContainer,
{
    onDelete: "CASCADE",
    foreignKey: {
        allowNull: true
    }
})


FlexCol.hasMany(FlexWidget,
{
    onDelete: "CASCADE",
    foreignKey: {
        allowNull: true
    }
})


sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
})

module.exports = {
  FlexCol,
  FlexRow,
  FlexWidget,
  FlexPage,
  FlexContainer
}