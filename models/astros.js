const daoAstros = require("../daos/astros");

module.exports = {
  getAstros,
  getAstro,
};

function getAstros() {
  return daoAstros.find({});
}

function getAstro(astroId) {
  return daoAstros.findById(astroId);
}