const {
  listVideos,
  uploadVideo,
  searchVideo,
  singleVideo,
} = require("../controllers/videos");
var express = require("express");
const multer = require("multer");
const path = require("path");

var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "client/public/videos");
  },
  filename: function (req, file, callback) {
    if (file.originalname.length > 6)
      callback(
        null,
        file.fieldname +
          "-" +
          Date.now() +
          file.originalname.substr(
            file.originalname.length - 6,
            file.originalname.length
          )
      );
    else callback(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

let multipleUploads = upload.fields([{ name: "thumbnail" }, { name: "video" }]);

router.get("/videos", listVideos);
router.get("/search", searchVideo);
router.post("/videos", multipleUploads, uploadVideo);
router.get("/videos/:id", singleVideo);

module.exports = router;
