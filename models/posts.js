const daoPosts = require("../daos/posts");

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};

function createPost(param) {
  return daoPosts.create(param);
}

function getPosts() {
  return daoPosts.find({});
}

function getPost(postId) {
  return daoPosts.findById(postId);
}

function updatePost(postId, updateData) {
  return daoPosts.findByIdAndUpdate(postId, updateData, { new: true });
}

function deletePost(postId) {
  return daoPosts.findByIdAndDelete(postId);
}