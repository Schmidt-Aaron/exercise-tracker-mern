const mongoose = require('mongoose')

// create the schema
const Schema = mongoose.Schema;

// describe the schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase:true,
    minLength: 3,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true
})

// create the model from the schema
const User = mongoose.model('User', userSchema);

// export it!
module.exports = User;