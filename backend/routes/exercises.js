const router = require('express').Router()
let Exercise = require('../models/Exercise')

router.get('/', (req, res) => {
  res.send('The exercise route is working')
})

module.exports = router