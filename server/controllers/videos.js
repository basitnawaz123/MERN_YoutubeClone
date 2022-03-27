const express = require("express");
const videoModel = require("../models/Videos");
const LikeModel = require("../models/LikeVideo");
var path = require("path");
const fs = require("fs");
const WatchLater = require("../models/WatchLater");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

const uploadVideo = (req, res) => {
  try {
    const thumbnail = req.files.thumbnail[0];
    const video = req.files.video[0];
    const title = req.body.title;
    const user = req.body.user_id;
    const videoData = new videoModel({
      title: title,
      user: user,
      thumbnail: thumbnail.filename,
      video: video.filename,
      tags: req.body.tags.split(","),
    });
    videoData.save();
    res.status(200).json({ message: "Video Uploaded Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const result = await videoModel.findByIdAndDelete({ _id: req.params.id });
    const thumbnailPath = `client\\public\\videos\\${result.thumbnail}`;
    const videoPath = `client\\public\\videos\\${result.video}`;
    fs.unlink(thumbnailPath, () => console.log("deleted"));
    fs.unlink(videoPath, () => console.log("videos deleted"));
    res.send("Video deleted successfully");
  } catch (error) {
    res.send(error.message);
  }
};
const listVideos = async (req, res) => {
  try {
    const { user } = req.query;
    if (user) {
      const result = await videoModel.find({ user: user }).sort({
        createdAt: -1,
      });
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(200).json({ message: "No videos available" });
      }
    } else {
      const result = await videoModel.find({}).sort({
        createdAt: -1,
      });
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(200).json({ message: "No videos available" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const singleVideo = async (req, res) => {
  const _id = req.params.id;

  try {
    const result = await videoModel.findById({ _id });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const searchVideo = (req, res) => {
  var query = new RegExp(req.query.q, "i");
  videoModel.find({ title: query }).then((result) => res.send(result));
};

const likeVideo = async (req, res) => {
  const { video_id, like, likedBy } = req.body;
  const isLiked = await LikeModel.find({ video: video_id, likedBy });
  if (isLiked.length == 0) {
    let data = new LikeModel({
      like,
      video: video_id,
      likedBy,
    });
    await data.save();
    res.status(200).json({ message: "Liked" });
  }
};

const fetchLikedVideos = async (req, res) => {
  try {
    const { user, video } = req.query;
    const result = await LikeModel.find({ likedBy: user, video });
    res.status(200).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

const fetchUserLikedVideos = async (req, res) => {
  try {
    const result = await LikeModel.find({ likedBy: req.query.user }).populate(
      "video"
    );

    res.status(200).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

const videoLikeStatus = async (req, res) => {
  try {
    const { video_id, user_id } = req.body;

    const result = await LikeModel.find({
      video: video_id,
      likedBy: user_id,
    });
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

const searchByTag = async (req, res) => {
  try {
    const { tag } = req.params;

    const result = await videoModel.find({ tags: tag }).sort({
      createdAt: -1,
    });
    if (result.length < 1) {
      const allResult = await videoModel.find({}).sort({
        createdAt: -1,
      });
      res.status(200).json(allResult);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// watch later

const watchLater = (req, res) => {
  const { user, video } = req.body;
  const data = new WatchLater({
    video,
    user,
  });

  data.save();
  res.send("Saved");
};

module.exports = {
  uploadVideo,
  listVideos,
  searchVideo,
  singleVideo,
  likeVideo,
  fetchLikedVideos,
  searchByTag,
  videoLikeStatus,
  watchLater,
  fetchUserLikedVideos,
  deleteVideo,
};
