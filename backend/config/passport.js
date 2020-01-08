const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
let User = require("../models/User");

passport.use(
  new LocalStrategy(
    {
      /* Tell passport what to use from req.body */
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      console.log("looking...");
      // look for a user with a matching email
      User.findOne({ email: email }, async (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: "No user with that email" });
        }

        // after a user is found compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          // passwords match
          return done(null, user);
        } else {
          // pw did not match
          return done(null, false, { message: "Password incorrect" });
        }
      });
    }
  )
);

// add
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
