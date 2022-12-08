'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_list.hasMany(models.User, { foreignKey: 'userId' })
      User_list.hasMany(models.List, { foreignKey: 'listId' })
    }
  }
  User_list.init(
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
      listId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'lists',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User_list',
      tableName: 'user_list'
    }
  )
  return User_list
}
