const mongoose = require('mongoose')

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const exerciseSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  description: {type: String, required:true},
  duration: {type: Number, required: true},
  date: {type: Date, required: true}
}, {
  timestamps: true
})

// create the model from the schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

// export it!
module.exports = Exercise;