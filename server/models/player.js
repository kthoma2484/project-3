var validator = require('validator');

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
        unique: true,
        validate: {
          min: 5,
          max: 15
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 6,
            msg: "Password must be more than 6 characters"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
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
      updatedAt: DataTypes.DATE,
    });

  validator.isEmail('myemail@email.com');
  
  return Player;
};
  