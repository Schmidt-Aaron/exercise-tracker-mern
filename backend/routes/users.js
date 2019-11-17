const router = require('express').Router()
let User = require('../models/User')


// get all users
router.route('/').get((req, res) => {
  const users = User.find()
    .then(users => {
      console.log(users)
      res.status(200).json(users)})
    .catch(error => res.status(400).json(`Error: ${error}`))
    
  })
  
  
// add a user
router.route('/add').post((req, res) => {
  
  // return 
  if (!req.body.username) {
    console.log('No user passed')

    res.status(400).send('no user passed')
  }

  const { username } = req.body
  const newUser = new User({ username });
  
  newUser.save()
  .then(user => res.status(200).json(`User: ${newUser.username}`))
  .catch(error => res.status(400).json(`Error: ${error}`))

res.send(`user added: ${newUser}`);
  
})

// remove a user

// update a user

module.exports = router