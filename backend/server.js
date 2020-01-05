// .../backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo")(session);
const { confirmAuthenticated } = require("./config/auth.js");

require("dotenv").config();

// initialize express
const app = express();
const port = process.env.PORT || 7777;

// set up mongoDB connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connection established");
});

// middleware
app.use(cors());
app.use(flash());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse formdata
app.use(
  session({
    secret: "aaron",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
); // generate better secret later!

app.use(passport.initialize());
app.use(passport.session());

// routing
const exerciseRouter = require("./controllers/exercises");
const userRouter = require("./controllers/users");
const authRouter = require("./controllers/auth");

// app.use("/auth", authRouter);
app.use("/exercises", exerciseRouter);
app.use("/users", confirmAuthenticated, userRouter);
app.use("/auth", authRouter); // change routing later

// starts the server
app.listen(port, () => {
  console.log(`The server is listening on port: ${port}`);
});
