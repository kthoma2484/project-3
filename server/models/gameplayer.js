module.exports = function(sequelize, DataTypes) {
    var Gameplayer = sequelize.define("Gameplayer", {
      gameplayerid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      playerid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gameid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: DataTypes.DATE, 
      updatedAt: DataTypes.DATE,
    },);
    return Gameplayer;
  };