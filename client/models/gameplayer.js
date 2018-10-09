module.exports = function(sequelize, DataTypes) {
    var Gameplayer = sequelize.define("Gameplayer", {
      gameplayerid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      playerid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gameid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: Sequelize.DATE, 
    },);
    return Gameplayer;
  };