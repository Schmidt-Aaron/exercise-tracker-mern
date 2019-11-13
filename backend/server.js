// .../backend/server.js
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')

require("dotenv").config()

// initialize express
const app = express()
const port = process.env.PORT || 7777

// set up mongoDB connection
const uri = process.env.MONGO_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("MongoDB connection established")
})

// middleware
app.use(cors())
app.use(express.json())

// starts the server
app.listen(port, () => {
  console.log(`The server is listening on port: ${port}`)
})
