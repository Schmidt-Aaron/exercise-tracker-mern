/**
 *
 *  Schema for a single exercise session of a workout
 *  child of Workout; pulls in Exercise schema to populate exercise details
 */

const mongoose = require("mongoose");

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const singleExerciseSchema = new Schema(
  {
    exerciseName: {
      // todo pull this from exercise schema/db
      type: String,
      lowercase: true,
      required: true,
      trim: true
    },
    description: { type: String },
    sets: {
      // lifting set data
      reps: { type: Number },
      weight: { type: Number }, // todo deal with kg or lbs; deal with multiple weights for each set
      // cardio set data
      pace: Number, // todo standardize speed... maybe go for pace
      distance: Number
    },
    duration: { type: Number }, //todo X => seconds
    distance: {
      unit: { type: String }, //todo figure out conversion between M, KM, yards, and Miles
      amount: { type: Number }
    }
    // heartRate: {type: }
  },
  {
    timestamps: true
  }
);

// create the model from the schema
const singleExercise = mongoose.model("SingleExercise", singleExerciseSchema);

// export it!
module.exports = singleExercise;
