// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("./models");

// Routes
// =============================================================
module.exports = function(app) {

// ROUTES FOR PLAYER DB

  // GET route for getting all of the players
  app.get("/api/player/", function(req, res) {
    db.Player.findAll({})
      .then(function(dbPlayer) {
        res.json(dbPlayer);
      });
  });

  // Get route for retrieving a single player
  app.get("/api/player/:id", function(req, res) {
    db.Player.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPlayer) {
        res.json(dbPlayer);
      });
  });

  // POST route for saving a new player
  app.post("/api/player", function(req, res) {
    console.log(req.body);
    db.Player.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
      .then(function(dbPlayer) {
        res.json(dbPlayer);
      });
  });

  // PUT route for updating player single score
  app.put("/api/player", function(req, res) {
    db.Player.update(req.body,
      {
        where: {
          singlescore: req.body.singlescore
        }
      })
      .then(function(dbPlayer) {
        res.json(dbPlayer);
      });
  });

    // PUT route for updating player multiplayer score
    app.put("/api/player", function(req, res) {
        db.Player.update(req.body,
          {
            where: {
              multiplayscore: req.body.multiplayscore
            }
          })
          .then(function(dbPlayer) {
            res.json(dbPlayer);
          });
      });

// ROUTES FOR GAME DB
    // POST route for saving a new player
    app.post("/api/game", function(req, res) {
        console.log(req.body);
        db.Game.create({
        numPlayers: req.body.numPlayers,
        })
        .then(function(dbGame) {
            res.json(dbGame);
        });
    });

// ROUTES FOR GAMEPLAYER DB
  // POST route for saving a new player
  app.post("/api/gameplayer", function(req, res) {
    console.log(req.body);
    db.Gameplayer.create({
        gameid: req.body.gameid,
        playerid: req.body.playerid,
    })
    .then(function(dbGameplayer) {
        res.json(dbGameplayer);
    });
});


};
