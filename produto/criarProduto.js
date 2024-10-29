const { produtos } = require("./produto");

function criarProduto(id, nome, categoria, fornecedor, precoporUnidade, quantidadeDisponivel, dataColheita, Certificação) {
  const novoproduto = { id, nome, categoria, fornecedor, precoporUnidade, quantidadeDisponivel, dataColheita, Certificação };
  try {
    if (
      validator.isEmpty(id) ||
      validator.isEmpty(nome) ||
      validator.isEmpty(fornecedor) ||
      validator.isEmpty(precoporUnidade) ||
      validator.isEmpty(quantidadeDisponivel) ||
      validator.isEmpty(dataColheita) ||
      validator.isEmpty(Certificação)
    ) {
      console.error("Todos os campos devem serem preenchidos")
      produtos.push(novoproduto);
    }
  } catch (error) {
    console.table("Erro ao cadastrar dados", error.message);
  }
}
module.exports = { criarProduto }