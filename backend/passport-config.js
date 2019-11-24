const LocalStrategy = require("passport-local")
const bcrypt = require("bcrypt")
let User = require("../models/User");

const initPassport = (passport, email) => {
  const authenticateUser = (email, password, done) => {
    // look for a user with a matching email
    User.findOne({email: email}, (err, user) => {
      if(err) {return done(err)}

      if(!user) {
        return done(null, false, {message: "No user with that email"})
      }
      // after a user is found compare passwords 
      try {
        if(await bcrypt.compare(password, user.password)) {
          // passwords match
          return done(null, user)
        } else {
          // pw did not match
          return done(null, false, {message: 'Password incorrect'})
        }
      } catch (error) {
        return done(error)
      }

    })

  }

  passport.use(new LocalStrategy({ usernameField: 'email'}), authenticateUser)
  passport.serializeUser((user, done) => {})
  passport.deserializeUser((id, done) => {})
}

module.exports = initPassport