// Load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// Load up the player model
var Player = require('../models/player');

// Expose this function to our app using module.exports
module.exports = function(passport) {

    // Passport session setup ==================================================
 
    // Required for persistent login sessions
    // Passport needs ability to serialize and unserialize players out of session

    // Used to serialize
    passport.serializeUser(function(user, done) {
        done(null, player.playerid);
    });

    // Used to deserialize
    passport.deserializeUser(function(id, done) {
        Player.findById(playerid, function(err, player) {
            done(err, player);
        });
    });


    // LOCAL SIGNUP ============================================================
 
    // Use named strategies since we have one for login and one for registration by default, if there was no name, it would just be called 'local'

    passport.use('local-registration', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a player whose email is the same as the forms email we are checking to see if the player trying to login already exists
        Player.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a player with that email
            if (player) {
                return done(null, false, req.flash('registrationMessage', 'That email is already taken.'));
            } else {

                // if there is no player with that email create the player
                var newPlayer = new Player();

                // set the player's local credentials
                newPlayer.local.email    = email;
                newPlayer.local.password = newPlayer.generateHash(password);

                // save the player
                newPlayer.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newPlayer);
                });
            }

        });    

        });

    }));

};
