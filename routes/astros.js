var express = require("express");
var router = express.Router();
var astroController = require("../controllers/astros");

// base path: /astros

router.get("/", astroController.getAstros);
// router.get("/", astroController.getAstros);

// GET /astros/:astroId get a specific astro
router.get("/:astroId", astroController.getAstro);

module.exports = router;