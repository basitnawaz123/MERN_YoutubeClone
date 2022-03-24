const express = require("express");
const videoModel = require("../models/Videos");
const LikeModel = require("../models/LikeVideo");
var path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");


const uploadVideo = (req, res) => {
  try {
    const thumbnail = req.files.thumbnail[0];
    const video = req.files.video[0];
    const title = req.body.title;
    const videoData = new videoModel({
      title: title,
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

const listVideos = async (req, res) => {
  try {
    const result = await videoModel.find({}).sort({
      createdAt: -1,
    });
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

const likeVideo = async (req, res) => {
  const { video_id, like } = req.body;

  const result = await LikeModel.findOne({ video: video_id });

  if (!result) {
    let data = new LikeModel({
      like: like,
      video: video_id,
    });
    await data.save();
    res.status(200).json({ message: "Liked" });
  }
};

const fetchLikedVideos = async (req, res) => {
  try {
    const result = await LikeModel.find({}).populate("video");
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
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

module.exports = {
  uploadVideo,
  listVideos,
  searchVideo,
  singleVideo,
  likeVideo,
  fetchLikedVideos,
  searchByTag,
};
