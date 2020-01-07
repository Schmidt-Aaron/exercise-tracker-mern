const mongoose = require("mongoose");

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      minLength: 3,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 2 // change later for security
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6
    },
    age: {
      type: Number,
      min: 18,
      max: 120
    },
    weight: {
      type: Number, // convert to Map when adding tracking feature
      min: 50,
      max: 750
    },
    height: {
      type: Number,
      min: 48,
      max: 120
    }
  },
  {
    timestamps: true
  }
);

// create the model from the schema
const User = mongoose.model("User", userSchema);

// export it!
module.exports = User;
