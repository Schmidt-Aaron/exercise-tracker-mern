/**
 *
 * Describe an individual workout session with list of individual exercises
 *
 */

const mongoose = require("mongoose");

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const workoutSchema = new Schema(
  {
    date: { type: Date, required: true },
    exercisesPerformed: { type: Object },
    duration: { type: Number },
    distance: { type: Number },
    notes: { type: String },
    public: Boolean,
    favorite: Boolean
  },
  {
    timestamps: true
  }
);

// create the model from the schema
const Workout = mongoose.model("Workout", workoutSchema);

// export it!
module.exports = Workout;
