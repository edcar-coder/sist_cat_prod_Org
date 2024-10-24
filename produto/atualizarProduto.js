const { produtos } = require("./produto");

function atualizarProduto(id, novoNome, novoCategoria, novoFornecedor, novoprecoporUnidade, novoquantidadeDisponivel, novodataColheita, novoCertificação) {
    try {
        const produto = produtos.find(elementodoarray =>
            elementodoarray.id === id
        )

        if (produto){
            produto.nome = novoNome
            produto.categoria = novoCategoria
            produto.fornecedor = novoFornecedor
            produto.precoporUnidade = novoprecoporUnidade
            produto.quantidadeDisponivel = novoquantidadeDisponivel
            produto.dataColheita = novodataColheita
            produto.Certificação = novoCertificação
        } else {
            console.log("produto não enconrado")
        }
    } catch (error) {
        console.error("Erro ao editar um aluno", error.message)
      }
    }

    module.exports = { atualizarProduto};

