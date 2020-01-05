// lives at the root/auth path

const router = require("express").Router();
const passport = require("../config/passport");
let User = require("../models/User");

router.route("/login").post((req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(err, user, info);
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.json("no user");
    }

    req.login(user, err => {
      if (err) {
        return next(err);
      }
      const { username, _id } = user;
      return res.status(200).json({ username, _id });
    });
  })(req, res, next);
});

router.route("/logout").get((req, res) => {
  req.logout();
  res.status(200).json("user logged out");
});

module.exports = router;
