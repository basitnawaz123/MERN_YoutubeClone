const {
  listVideos,
  uploadVideo,
  searchVideo,
  singleVideo,
  likeVideo,
  fetchLikedVideos,
  searchByTag,
  videoLikeStatus,
  watchLater,
  fetchUserLikedVideos,
  deleteVideo,
} = require("../controllers/videos");
var express = require("express");
const multer = require("multer");
const path = require("path");
const { requireAuth } = require("../middleware/checkAuth");
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
var maxSize = 5242880;

const upload = multer({ storage: storage, limits: { filezie: maxSize } });

let multipleUploads = upload.fields([{ name: "thumbnail" }, { name: "video" }]);

router.get("/videos", listVideos);
router.get("/search", searchVideo);
router.post("/videos", requireAuth, multipleUploads, uploadVideo);
router.delete("/videos/:id", requireAuth, deleteVideo);
router.get("/videos/:id", singleVideo);
router.post("/video/like", requireAuth, likeVideo);
router.get("/video/like", requireAuth, fetchLikedVideos);
router.get("/video/Userliked", requireAuth, fetchUserLikedVideos);

router.get("/video/likestatus", requireAuth, videoLikeStatus);
router.post("/video/watch_later", requireAuth, watchLater);

router.get("/video/:tag", searchByTag);



module.exports = router;
