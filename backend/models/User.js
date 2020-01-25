/**
 *
 * User Profile
 * pulls in workout schema to populate workouts object/array
 */

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
      minLength: 2 // todo change later for security
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
      type: Number, // todo convert to Map when adding tracking feature
      min: 50,
      max: 750
    },
    height: {
      type: Number, // todo save in cm; list in inches
      min: 48,
      max: 120
    },
    workouts: {
      type: Array // todo revisit this type and populate
    },
    avatar: { type: String } // todo finish link to avatar resource. Gravatar // uploaded picture
  },
  {
    timestamps: true
  }
);

// Error handlers must have error, document, and next function
// Error for duplicate email uses mongoose post middleware
userSchema.post("save", (error, doc, next) => {
  if ((error.name = "MongoError" && error.code === 11000)) {
    let cb = {
      errorMessage: "This user already exists",
      errorCode: 11000
    };
    const jsonCB = JSON.stringify(cb);
    next(jsonCB);
  } else {
    next(error);
  }
});

// create the model from the schema
const User = mongoose.model("User", userSchema);

// export it!
module.exports = User;
