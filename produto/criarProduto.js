const { produtos } = require("./produto");

function criarProduto(id, nome, categoria, fornecedor, precoporUnidade, quantidadeDisponivel, dataColheita, Certificação) {
const novoproduto = {id, nome, categoria, fornecedor, precoporUnidade, quantidadeDisponivel, dataColheita, Certificação};
  try {
    produtos.push(novoproduto);
  } catch (error) {
    console.error("Erro ao cadastrar dados", error.message);
    }  
}

module.exports = { criarProduto };