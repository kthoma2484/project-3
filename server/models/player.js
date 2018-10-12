module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
      playerid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
          min: 5,
          max: 15
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1],
            min: 15,
        } 
      },
      singlescore: {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      multiplayscore: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      recoveryhash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      timestamp: DataTypes.DATE,
      createdAt: DataTypes.DATE, 
    },);
    return Player;
  };
  