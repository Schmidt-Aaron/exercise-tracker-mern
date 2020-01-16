const mongoose = require("mongoose");

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
      trim: true
    },
    description: { type: String },
    sets: {
      reps: { type: Number },
      weight: { type: Number }
    },
    duration: { type: Number },
    distance: {
      unit: { type: String },
      amount: { type: Number }
    }
  },
  {
    timestamps: true
  }
);

// create the model from the schema
const Exercise = mongoose.model("Exercise", exerciseSchema);

// export it!
module.exports = Exercise;
