module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
      gameid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
      numplayers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
          min: 1,
          max: 4
        }
      },
      createdAt: DataTypes.DATE, 
      updatedAt: DataTypes.DATE,
    },);
    return Game;
  };