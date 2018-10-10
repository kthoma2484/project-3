module.exports = {
    "development": {
      "username": process.env.DEV_DB_USER,
      "password": process.env.DEV_DB_PASSWORD,
      "database": "triviagame_db",
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  };
  