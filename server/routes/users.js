var express = require("express");
const { register, login } = require("../controllers/users");

var router = express.Router();

router.post("/", login);
router.post("/register", register);

module.exports = router;
