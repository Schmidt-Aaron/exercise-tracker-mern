const router = require("express").Router();
let User = require("../models/User");
const bcrypt = require("bcrypt");

// get all users
router.route("/").get((req, res) => {
  if (req.isAuthenticated()) {
    const { username, email, age, height, weight } = req.user;
    const userSansPW = { username, email, age, height, weight };
    res.json(userSansPW);
  } else {
    res.status(401).json("not authorized!!");
  }
  // const users = User.findById()
  //   .then(users => {
  //     console.log(users);
  //     res.status(200).json(users);
  //   })
  //   .catch(error => res.status(400).json(`Error: ${error}`));
});

// add a user
router.route("/register").post(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      age: null,
      height: null,
      weight: null
    });

    console.log(newUser);

    newUser
      .save()
      .then(user => res.status(200).json(`User added: ${newUser.username}`))
      .catch(error => res.status(400).json(`Error: ${error}`));
  } catch {
    err => console.log(err);
  }
});

// remove a user

// update a user

module.exports = router;
