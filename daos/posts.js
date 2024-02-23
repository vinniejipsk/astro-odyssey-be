const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Users",
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // imageUrl: {
  //   type: String,
  // },
  // videoUrl: {
  //   type: String,
  // },
  // firstPic: {
  //   type: Number,
  // },
});

module.exports = mongoose.model("Posts", postSchema);