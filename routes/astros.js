var express = require("express");
var router = express.Router();
var astroController = require("../controllers/astros");

// base path: /reviews

router.get("/", astroController.getAstros);
// router.get("/", reviewController.getAstros);

// GET /astros/:astroId get a specific review
router.get("/:astroId", astroController.getAstro);

module.exports = router;