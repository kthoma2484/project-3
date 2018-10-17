module.exports = function(app, passport) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/gameplay', function(req, res) {
      res.render('gameplay.js'); // load the index.ejs file
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  // app.get('/login', function(req, res) {

  //     // render the page and pass in any flash data if it exists
  //     res.render('login.ejs', { message: req.flash('loginMessage') }); 
  // });

  // process the login form
  // app.post('/login', do all our passport stuff here);

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  // app.get('/signup', function(req, res) {

  // render the page and pass in any flash data if it exists
  //     res.render('signup.ejs', { message: req.flash('signupMessage') });
  // });

  // process the signup form
  // app.post('/signup', do all our passport stuff here);

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/userprofile', isLoggedIn, function(req, res) {
      res.render('Userprofile.js', {
          username : req.username // get the player out of session and pass to template
      });
  });

  // process the registration form
  app.post('/api/register', passport.authenticate('local-register', {
    successRedirect : '/userprofile', // redirect to the secure profile section
    failureRedirect : '/gameplay', // redirect back to the gameplay page if there is an error
    failureFlash : true // allow flash messages
  }));


  // process the login form
//   app.post('/api/login', passport.authenticate('local-login', {
//     successRedirect : 'http://localhost:3000/userprofile', // redirect to the secure profile section
//     failureRedirect : '/gameplay', // redirect back to the gameplay page if there is an error
//     failureFlash : true // allow flash messages
//   }));

  app.post('/api/login', 
  passport.authenticate('local-login', { failureRedirect: '/gameplay' }),
  function(req, res) {
    res.redirect('/');
  });  
  
  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}


// Dependencies
// =============================================================

// Requiring our Todo model
//var db = require("./models");

// Routes
// =============================================================
// module.exports = function(app, passport) {

//   // Profile Page =====================
//   // Protected so you have to be logged in to visit
//   // Use route middleware to verify this (the isLoggedIn function)
//   app.post('/api/login', isLoggedIn, function(req, res) {
//       db.Player.findOne({
//       where: {
//         username: req.body.username,
//         password: req.body.password
//     }})
//       .then(function(dbPlayer) {
//         res.render(dbPlayer);
//       });
//   });

// //   app.post("/api/register", function(req, res) {
// //     db.Player.findOne({
// //       where: {
// //         username: req.body.username,
// //         password: req.body.password
// //       }
// //     })
// //     .then(function(){
// //     db.Player.create(req.body).then(function(dbPlayer) {
// //       res.json(dbPlayer);
// //     });
// //   });
// // });


//   // process the registration form
//   app.post('/api/register', passport.authenticate('local-registration', {
//     successRedirect : '/userprofile', // redirect to the secure profile section
//     failureRedirect : '/gameplay', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
//   }));




//   // Logout Page ==============================
//   // =====================================
//   app.get('/logout', function(req, res) {
//       req.logout();
//       res.redirect('/');
//   });





// // route middleware to make sure a player is logged in
// function isLoggedIn(req, res, next) {

//   // if user is authenticated in the session, carry on 
//   if (req.isAuthenticated())
//       return next();

//   // if they aren't redirect them to the home page
//   res.redirect('/');
// }

//}

//----------------------------------------------------------------------

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



