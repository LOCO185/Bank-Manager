const mongoose = require("mongoose");

const User = mongoose.model("User", {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
      type: String,
      required: true
  },
  credit: {
      type: Number,
      default: 0
  },
  cash: {
      type: Number,
      default: 0
  },
  age: {
    type: Number,
    min: 16,
  },
});

module.exports = User;
