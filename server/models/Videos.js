const mongoose = require("mongoose");

const VideosSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter video title"],
    },

    thumbnail: {
      type: String,
      require: [true, "Please select video thumbnail"],
    },

    video: {
      type: String,
      require: [true, "Please select video"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = videos = mongoose.model("videos", VideosSchema);
