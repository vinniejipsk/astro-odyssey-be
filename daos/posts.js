const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  dateTime: {
    type: String,
  },
  locationObserve: {
    type: String,

  },
  visibility: {
    type: String,
  },
  magnitude: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  media: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", postSchema);