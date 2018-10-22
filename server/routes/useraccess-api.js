// Load up the player model
var db = require('../models');

module.exports = function(app, passport) {

  app.get('/gameplay', function(req, res) {
    req.flash({ message: req.flash(['loginMessage', 'registrationMessage'])} )
  })

    // LOGIN ===============================
    // process the login form
    app.post('/login', ((req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
        if (err) { 
            return next(err); 
        }
        if (!user) { 
            return res.redirect('/gameplay'); 
        }
        req.logIn(user, function(err) {
            if (err) { 
            return next(err); 
            }
            return res.redirect('/userprofile');
        });
        })(req, res, next);
    }));

  // Registration ===============================
  // process the registration form
  app.post('/register', passport.authenticate('local-register', {
    successRedirect : '/userprofile', // redirect to the secure profile section
    failureRedirect : '/gameplay', // redirect back to the gameplay page if there is an error
    failureFlash : true // allow flash messages
  }));
    
  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
};
