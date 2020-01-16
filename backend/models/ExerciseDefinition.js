const mongoose = require("mongoose");

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const exerciseDefinitionSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
      trim: true
    },
    description: { type: String },
    muscleGroup: { type: String },
    muscleList: { type: Array },
    exerciseType: { type: String },
    difficulty: { type: String },
    movement: { type: String }
  },
  {
    timestamps: true
  }
);

// create the model from the schema
const ExerciseDefinition = mongoose.model(
  "ExerciseDefinition",
  exerciseDefinitionSchema
);

// export it!
module.exports = ExerciseDefinition;
