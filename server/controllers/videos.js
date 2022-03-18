const express = require("express");
const videoModel = require("../models/Videos");
var path = require("path");
const fs = require("fs");

const uploadVideo = (req, res) => {
  try {
    const thumbnail = req.files.thumbnail[0];
    const video = req.files.video[0];
    const title = req.body.title;
    const videoData = new videoModel({
      title: title,
      thumbnail: thumbnail.filename,
      video: video.filename,
    });
    videoData.save();
    res.status(200).json({ message: "Video Uploaded Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const listVideos = async (req, res) => {
  try {
    const result = await videoModel.find({});
    if (result.length > 0) {
      res.status(200).send(result);
    } else {
      res.status(200).json({ message: "No videos available" });
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

module.exports = {
  uploadVideo,
  listVideos,
  searchVideo,
  singleVideo,
};
