const router = require('express').Router()
let Exercise = require('../models/Exercise')

// get all exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => {
      console.log(exercises)
      res.status(200).json(exercises)})
    .catch(error => res.status(400).json(`Error: ${error}`))
})

// add an exercise
router.route('/add').post((req, res) => {
  
  // throws a unhandled promise rejection warning: fix later
  // if(!req.body.username || !req.body.description || !req.body.duration) {
  //   res.status(400).json('Could Not Add Exercise. The exercise object is incomplete')
  // }

  const {username, description, duration} = req.body;
  const exerciseDate = new Date();
  const newExercise = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(exerciseDate)
  })

  newExercise.save()
    .then(exercise => res.status(200).json(`Added: ${newExercise}`))
    .catch(error => res.status(400).json(`Error: ${error}`))

})


// get all exercises from a specific user
router.route('/:id').get((req, res) => {
  
  // fail if no id passed
  if(!req.params.id) {
    res.status(400).json('no user specified')
  }

  const userID = req.params.id
  Exercise.find({username: userID})
    .then(exercises => {
      res.status(200).json(exercises)})
    .catch(error => res.status(400).json(`Error: ${error}`))
})

// delete an exercise
// get a specific exercise from a specific user



module.exports = router