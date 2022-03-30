const mongoose = require("mongoose");

const WatchLaterSchema = mongoose.Schema(
  {
    video: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "videos",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },

    watchLater: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = watchLater = mongoose.model("watchLater", WatchLaterSchema);
