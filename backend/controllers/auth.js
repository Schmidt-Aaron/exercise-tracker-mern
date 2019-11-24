const router = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
let User = require("../models/User");

const initPassport = require("./passport-config");
initPassport(passport, email => {
  // find user with email
  User.findOne({ email: email }).then(user => user);
});
