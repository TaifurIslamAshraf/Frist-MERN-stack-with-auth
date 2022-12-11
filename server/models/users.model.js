const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createOn: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
