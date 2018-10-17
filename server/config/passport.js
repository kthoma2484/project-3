// Load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// Load up the player model
var db = require('../models');

// Expose this function to our app using module.exports
module.exports = function(passport) {

    // Passport session setup ==================================================
 
    // Required for persistent login sessions
    // Passport needs ability to serialize and unserialize players out of session

    // Used to serialize
    passport.serializeUser(function(player, done) {
        done(null, player.playerid);
    });

    // Used to deserialize
    passport.deserializeUser(function(playerid, done) {
        db.Player.findById(playerid, function(err, player) {
            done(err, player);
        });
    });


    // LOCAL SIGNUP ============================================================
 
    // Use named strategies since we have one for login and one for registration by default, if there was no name, it would just be called 'local'
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        process.nextTick(function() {
            console.log('username is:' + username + ' password is: ' + password);

            db.Player.findOne({ where: { username, password }})
            .then(function(player, err) {
                // if there are any errors, return the error
                console.log(player.username);  

                if (err)
                return done(err);
                
                if (player) {
                    return done(null, player);
                } else {
                    return done(null, req.flash('IncorrectLogin', 'That username and/or password is incorrect.'));
                };
            });
        });
    }));
    

    passport.use('local-register', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
         process.nextTick(function() {

        // find a player whose username is the same as the forms username we are checking to see if the player trying to login already exists
        db.Player.findOne({ where: { username }})
            .then(function(err, player) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a player with that username
            if (player) {
                return done(null, false, req.flash('registrationMessage', 'That username is already taken.'));
            } else {
                
                // if there is no player with that username create the player
                var newPlayer = new db.Player();

                // set the player's local credentials
                newPlayer.username = username;
                newPlayer.password = password;
                // newPlayer.password = newPlayer.generateHash(password);

                // save the player
                newPlayer.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newPlayer);
                });
                console.log(newPlayer)
            }

        });    

        });

    }));

};
