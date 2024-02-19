var express = require("express");
var router = express.Router();
var postController = require("../controllers/posts");
// var securityMiddleware = require("../middleware/security");

// base path: /reviews

router.get("/", postController.getPosts);
// router.get("/", postController.getPosts);

// GET /posts/:postId get a specific review
router.get("/:postId", postController.getPost);

// POST /reviews/create create a review
router.post("/create", postController.createPost);

// PUT /reviews/:reviewId update a review
// router.put("/:postId/edit", securityMiddleware.checkPermission, postController.updatePost);
router.put("/:postId/edit", postController.updatePost);

// DELETE /reviews/:reviewId delete a review
// router.delete("/:postId", securityMiddleware.checkPermission, postController.deletePost);
router.delete("/:postId", postController.deletePost);

module.exports = router;