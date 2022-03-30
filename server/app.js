const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
var cors = require("cors");
connectDB();
PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var videosRouter = require("./routes/videos");
var usersRouter = require("./routes/users");
app.get("/", (req, res) => {
  res.send("Youtube CLone");
});

app.use("/auth", usersRouter);
app.use("/api", videosRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
