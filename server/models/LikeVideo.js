const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema(
  {
    like: {
      type: Boolean,
      default: false,
    },

    video: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "videos",
    },

    likedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },

    count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = likes = mongoose.model("likes", LikeSchema);
