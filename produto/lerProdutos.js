const { produtos } = require("./produto");

function lerProduto() {
    try {
      console.table(produtos)
    } catch (error) {
      console.error("Erro ao listar produtos",error.message);
    }
  }

module.exports = { lerProduto };