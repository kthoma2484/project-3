// Load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// Load up the player model
var db = require('../models');

// Import dependency
var bcrypt   = require('bcrypt-nodejs');

// Expose this function to our app using module.exports
module.exports = function(passport) {

    // Passport session setup ==================================================
 
    // Required for persistent login sessions
    // Passport needs ability to serialize and unserialize players out of session

    // Used to serialize
    passport.serializeUser(function(username, done) {
        done(null, username);
    });

    // Used to deserialize
    passport.deserializeUser(function(username, done) {
        done(null, username);
    });


    
    // Use named strategies since we have one for login and one for registration by default, if there was no name, it would just be called 'local'
    
    // LOCAL Login ============================================================
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            process.nextTick(function() {
                console.log('username is:' + username + ' password is: ' + password);
                // find a user whose username is the same as the forms username
                // we are checking to see if the user trying to login already exists
                db.Player.findOne({ 
                    where: { 
                        'username': username, 
                        }
                    })
                    .then((player, err) => {
                    // if there are any errors, return the error
                    // console.log("!!!!", player)
                    console.log("!!!username:", username)
                    if (err) {
                        console.log('ERROR!', err);
                        return done(err);
                    }
                    
                    // if no user is found, return the message
                    if (!player) {
                        console.log('That username is incorrect.');
                        // return done(null, false, req.flash('loginMessage', 'That username and/or password is incorrect.'));
                    }  
                    //if username is good, check the encrypted password
                    else if (bcrypt.compareSync(password, player.password)) {
                        console.log("User: " + username + " found!");
                        return done(null, player);
                    } else {
                        console.log('That password is incorrect.');
                    } 
                })
            });  
        })
    );
    
     
    // LOCAL Registration ============================================================
    passport.use('local-register', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // db.Player.findOne wont fire unless data is sent back
         process.nextTick(function() {

        // find a player whose username is the same as the forms username we are checking to see if the player trying to login already exists
        db.Player.findOne({ where: { username }})
            .then(function(err, player) {
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
                newPlayer.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

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
