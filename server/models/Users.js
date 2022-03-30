const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password cannot be empty"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = users = mongoose.model("users", userSchema);
