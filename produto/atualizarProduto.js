const { produtos } = require("./produto");

function atualizarProduto(id, novoNome, novoCategoria, novoFornecedor, novoprecoporUnidade, novoquantidadeDisponivel, novodataColheita, novoCertificação) {

    const produto = produtos.find(elementodoarray =>
        elementodoarray.id === id
    )
    try {
            if (produto) {
                produto.nome = novoNome
                produto.categoria = novoCategoria
                produto.fornecedor = novoFornecedor
                produto.precoporUnidade = novoprecoporUnidade
                produto.quantidadeDisponivel = novoquantidadeDisponivel
                produto.dataColheita = novodataColheita
                produto.Certificação = novoCertificação

                if (
                    validator.isEmpty(novoNome) ||
                    validator.isEmpty(novoCategoria) ||
                    validator.isEmpty(novoFornecedor) ||
                    validator.isEmpty(novoprecoporUnidade) ||
                    validator.isEmpty(novoquantidadeDisponivel)
                ){
                    console.error("Todos os campos devem serem preenchidos")
                }
            
        } else {
            console.log("produto não enconrado")
        }
    } catch (error) {
        console.error("Erro ao editar um produto", error.message)
    }
}

module.exports = { atualizarProduto };

