module.exports = {
  confirmAuthenticated: function(req, res, next) {
    // authorized
    if (req.isAuthenticated()) {
      console.log("user is logged in!");
      return next();
    }

    // not authorized
    res.status(401).json("Not Authorized"); // temporary for testing
    // res.redirect("/login")
  },

  // what to do if already authorized
  forwardAuthenticated: function(req, res, next) {
    // do more later
    res.json("already logged in");
  }
};
