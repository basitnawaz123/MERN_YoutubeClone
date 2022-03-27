const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const requireAuth = (req, res, next) => {
  const token = req.header("Authorization");

  if (token) {
    jwt.verify(token, "YoutubeClone", async (err, result) => {
      if (err) {
        res.send(err.message);
      } else {
        const _id = result._id;
        const userExists = await Users.findById({ _id });
        if (userExists) {
          next();
        } else {
          res.json("Token does not exists");
        }
      }
    });
  } else {
    res.send("You must logged in first in order to perform activity");
  }
};

module.exports = {
  requireAuth,
};
