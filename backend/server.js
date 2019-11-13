const express = require('express')
const cors = require('cors')

require('dotenv').config()

// set up the app
const app = express()
const port = process.env.PORT || 7777

// middleware
app.use(cors())
app.use(express.json())

// launch app
app.listen(port,  () => {
  console.log(`The server is listening on port: ${port}`)
})
