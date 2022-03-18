const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect("mongodb://localhost/youtube_clone", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo DB Connected!"))
    .catch((error) => console.log(error));
};
module.exports = connectDB;
