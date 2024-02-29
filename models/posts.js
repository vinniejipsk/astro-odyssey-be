const daoPosts = require("../daos/posts");

module.exports = {
  createPost,
  getPosts,
  getSearchPosts,
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

function getSearchPosts(query = {}) {
  return daoPosts.find(query); // Use the query object in the find method
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