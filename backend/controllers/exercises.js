const router = require("express").Router();
let Exercise = require("../models/Exercise");

// get all exercises
router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => {
      console.log(exercises);
      res.status(200).json(exercises);
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// add an exercise
router.route("/add").post((req, res) => {
  // throws a unhandled promise rejection warning: fix later
  // if(!req.body.username || !req.body.description || !req.body.duration) {
  //   res.status(400).json('Could Not Add Exercise. The exercise object is incomplete')
  // }

  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({
    username,
    description,
    date,
    duration: Number(duration)
  });

  newExercise
    .save()
    .then(() => res.status(200).json(`New exercise added: ${newExercise}`))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// get all exercises from a specific user
router.route("/user/:user").get((req, res) => {
  // fail if no id passed
  if (!req.params.user) {
    res.status(400).json("no user specified");
  }

  const userID = req.params.user;
  console.log(`Querying DB for all exercises from user: ${userID}
  `);

  Exercise.find({ username: userID })
    .then(exercises => {
      res.status(200).json(exercises);
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// get a specific exercise by id
router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Exercise.findById(req.params.id)
    .then(exercise => res.status(200).json(exercise))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// delete an exercise
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id).then(() => {
    res.status(200).json(`Exercise Removed.`);
  });
});

//update an exercise
router.route("/update/:id").get((req, res) => {
  Exercise.findById(req.params.id).then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save().then(() => res.status(200).json("Exercise Added"));
  });
});

module.exports = router;
