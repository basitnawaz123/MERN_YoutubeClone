const mongoose = require("mongoose");

const VideosSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter video title"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },

    thumbnail: {
      type: String,
      require: [true, "Please select video thumbnail"],
    },

    video: {
      type: String,
      require: [true, "Please select video"],
    },

    tags: [
      {
        type: String,
        require: [true, "Please add tags"],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = videos = mongoose.model("videos", VideosSchema, "videos");
