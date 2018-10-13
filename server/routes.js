// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("./models");

// Routes
// =============================================================
module.exports = function(app, passport) {

  // Profile Page =====================
  // Protected so you have to be logged in to visit
  // Use route middleware to verify this (the isLoggedIn function)
  app.post('/api/login', isLoggedIn, function(req, res) {
      db.Player.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
    }})
      .then(function(dbPlayer) {
        res.render(dbPlayer);
      });
  });

  app.post("/api/register", function(req, res) {
    db.Player.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });


  // process the registration form
//   app.post('/api/register', passport.authenticate('local-registration', {
//     successRedirect : '/profile', // redirect to the secure profile section
//     failureRedirect : '/gameplay', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
//   }));




  // Logout Page ==============================
  // =====================================
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });





// route middleware to make sure a player is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}





// ROUTES FOR PLAYER DB

//   // GET route for getting all of the players
//   app.get("/api/player/", function(req, res) {
//     db.Player.findAll({})
//       .then(function(dbPlayer) {
//         res.json(dbPlayer);
//       });
//   });

//   // Get route for retrieving a single player
//   app.get("/api/player/:id", function(req, res) {
//     db.Player.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPlayer) {
//         res.json(dbPlayer);
//       });
//   });

//   // POST route for saving a new player
//   app.post("/api/player", function(req, res) {
//     console.log(req.body);
//     db.Player.create({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email
//     })
//       .then(function(dbPlayer) {
//         res.json(dbPlayer);
//       });
//   });

//   // PUT route for updating player single score
//   app.put("/api/player", function(req, res) {
//     db.Player.update(req.body,
//       {
//         where: {
//           singlescore: req.body.singlescore
//         }
//       })
//       .then(function(dbPlayer) {
//         res.json(dbPlayer);
//       });
//   });

//     // PUT route for updating player multiplayer score
//     app.put("/api/player", function(req, res) {
//         db.Player.update(req.body,
//           {
//             where: {
//               multiplayscore: req.body.multiplayscore
//             }
//           })
//           .then(function(dbPlayer) {
//             res.json(dbPlayer);
//           });
//       });

// // ROUTES FOR GAME DB
//     // POST route for saving a new player
//     app.post("/api/game", function(req, res) {
//         console.log(req.body);
//         db.Game.create({
//         numPlayers: req.body.numPlayers,
//         })
//         .then(function(dbGame) {
//             res.json(dbGame);
//         });
//     });

// // ROUTES FOR GAMEPLAYER DB
//   // POST route for saving a new player
//   app.post("/api/gameplayer", function(req, res) {
//     console.log(req.body);
//     db.Gameplayer.create({
//         gameid: req.body.gameid,
//         playerid: req.body.playerid,
//     })
//     .then(function(dbGameplayer) {
//         res.json(dbGameplayer);
//     });
// });


};
