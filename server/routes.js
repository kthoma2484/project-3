
module.exports = function(app, passport) {

  app.get('/gameplay', function(req, res) {
    req.flash({ message: req.flash(['loginMessage', 'registrationMessage'])} )
  })

  // PROFILE SECTION =====================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/userprofile', isLoggedIn, function(req, res) {
      res.render('Userprofile.js', {
          username : req.username // get the player out of session and pass to template
      });
  });

  // Registration ===============================
  // process the registration form
  app.post('/register', passport.authenticate('local-register', {
    successRedirect : '/userprofile', // redirect to the secure profile section
    failureRedirect : '/gameplay', // redirect back to the gameplay page if there is an error
    failureFlash : true // allow flash messages
  }));

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
  //     if (err)
  //       console.log('Error in login', user, info)
  //       // console.log('/login response')
  //   }),
  //   function(req, res) { 
  //   res.redirect('/userprofile') // redirect to the secure profile section
  // });  
  
  // LOGOUT ==============================
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
