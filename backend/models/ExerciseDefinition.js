const mongoose = require("mongoose");

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const exerciseDefinitionSchema = new Schema(
  {
    name: {
      // what the exercise is called
      type: String,
      lowercase: true,
      required: true,
      trim: true
    },
    description: { type: String }, // describe the exercise
    muscleGroup: { type: String }, // macro level muscle group
    muscleList: [String], // all major muscles worked
    exerciseType: { type: String }, // strength, cardio, mobility, balance...etc
    difficulty: { type: String }, // beginner, intermediate, advanced
    movementType: { type: String } // horiz push/pull, vert pus/pull, legs
  },
  {
    timestamps: true
  }
);

// sample muscle group info
const muscleGroup = [
  "trapezius",
  "shoulders",
  "chest",
  "biceps",
  "triceps",
  "forearms",
  "abs",
  "back",
  "quadricepss",
  "hamstrings",
  "calves"
];

// create the model from the schema
const ExerciseDefinition = mongoose.model(
  "ExerciseDefinition",
  exerciseDefinitionSchema
);

// export it!
module.exports = ExerciseDefinition;
