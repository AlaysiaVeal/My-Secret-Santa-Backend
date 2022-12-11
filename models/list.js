'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.hasOne(models.User, {
        through: models.User_list,
        foreignKey: 'listId'
      })
    }
  }
  List.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      list: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'List',
      tableName: 'lists'
    }
  )
  return List
}
