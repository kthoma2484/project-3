// Load up the player model
var db = require('../models');

module.exports = function(app, passport) {

  // PROFILE SECTION =====================
    // Profile protected so you have to be logged in to visit and use route middleware to verify this (the isLoggedIn function)
    app.get('/userprofile', isLoggedIn, function(req, res) {
        db.Player.findOne({ 
        where: { 
            'username': req.username, 
            }
        })
        .then((username => {   
            // get the player out of session and pass to template
            console.log(username.username)
        }));
    });
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/');
}

