const express = require("express");
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Joi = require("joi");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await userModel.findOne({ email });
  if (user) return res.status(400).send("Email already exists...");
  const salt = await bcrypt.genSalt(10);

  const usersData = new userModel({
    name,
    email,
    password: await bcrypt.hash(password, salt),
  });
  const result = await usersData.save();
  if (result) {
    res.status(200).send("Account Created Successfully!");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userData = await userModel.findOne({ email });
  if (!userData) {
    res.status(400).send(`Record not found against your email ${email}`);
  } else {
    bcrypt.compare(password, userData.password, (err, result) => {
      if (result) {
        var token = jwt.sign(
          {
            _id: userData._id,
            email: userData.email,
            name: userData.name,
            auth: true,
          },
          "YoutubeClone"
        );

        res.status(200).send(token);
      } else {
        res.status(400).json({ message: "Your Password is Incorrect" });
      }
    });
  }
};

module.exports = {
  register,
  login,
};
