const modelAstros = require("../models/astros");

module.exports = {
  getAstros,
  getAstro,
};

async function getAstros(req, res) {
  try {
    const astros = await modelAstros.getAstros();
    res.status(200).json(astros);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getAstro(req, res) {
  try {
    const astroId = req.params.postId;
    const astro = await modelAstros.getAstro(astroId);
    if (!astro) {
      return res.status(404).json({ message: "Astronomical data not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}