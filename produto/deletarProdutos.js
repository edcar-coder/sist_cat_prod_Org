const { produtos } = require("./produto");

function deletarProdutos() {
    try {

        const indice = produtos.findIndex(elementodoarray =>
         elementodoarray.id === id
        )
        if (indice === -1) {
            console.log("Produto não encontrado")
        } else {
            produtos.splice(indice, 1)
            console.log("produto deletado com sucesso!")
        }
    
    } catch (error) {
        console.error("Erro ao excluir produto",error.message)
    
    }
}

module.exports = { deletarProdutos };