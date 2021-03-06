'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.quote.belongsTo(models.user)
      models.quote.hasMany(models.diary, {onDelete: 'CASCADE'})
    }
  };
  quote.init({
    content: DataTypes.TEXT,
    authorName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'quote',
  });
  return quote;
};