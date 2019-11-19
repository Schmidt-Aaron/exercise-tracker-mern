const router = require("express").Router();
let User = require("../models/User");

// get all users
router.route("/").get((req, res) => {
  const users = User.find()
    .then(users => {
      console.log(users);
      res.status(200).json(users);
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// add a user
router.route("/add").post((req, res) => {
  // return
  if (!req.body.username) {
    console.log("No user passed");

    res.status(400).json("no user passed");
  }

  const { username } = req.body;
  const newUser = new User({ username });
  console.log(newUser);

  newUser
    .save()
    .then(user => res.status(200).json(`User added: ${newUser.username}`))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// remove a user

// update a user

module.exports = router;
