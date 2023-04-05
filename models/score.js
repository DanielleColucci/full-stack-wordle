'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Score.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })
    }
  }
  Score.init({
    mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 16
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 6,
      }
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};