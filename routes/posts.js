var express = require("express");
var router = express.Router();
var postController = require("../controllers/posts");
var securityMiddleware = require("../middleware/security");

// base path: /posts

router.get("/", postController.getPosts);
// router.get("/", postController.getPosts);

// GET /posts/:postId get a specific post
router.get("/:postId", postController.getPost);

// POST /posts/create create a post
router.post("/create", postController.createPost);

// PUT /posts/:postId update a post
router.put("/:postId/edit", securityMiddleware.checkPermission, postController.updatePost);
// router.put("/:postId/edit", postController.updatePost);

// DELETE /posts/:postId delete a post
// router.delete("/:postId", securityMiddleware.checkPermission, postController.deletePost);
router.delete("/:postId", postController.deletePost);

module.exports = router;