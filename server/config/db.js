const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect(
      "mongodb+srv://Basitnawaz507:pakistan123@novainternship.ung5y.mongodb.net/youtube_clone?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Mongo DB Connected!"))
    .catch((error) => console.log(error));
};
module.exports = connectDB;
