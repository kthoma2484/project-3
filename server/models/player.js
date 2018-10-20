var bcrypt   = require('bcrypt-nodejs');

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
        allowNull: true,
        unique: true,
        validate: {
            isEmail: {
            args: true,
            msg: "Email is not valid"
          }
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
    });

  // generating a hash
  Player.prototype.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  Player.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  return Player;
  };
  