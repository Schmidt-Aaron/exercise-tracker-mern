const router = require('express').Router()
let User = require('../models/User')



router.get('/', (req, res) => {
  res.send('The users route is working')
})


module.exports = router