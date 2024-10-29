const prompt = require("prompt-sync")();

const { criarProduto } = require("./produto/criarProduto");
const { lerProdutos } = require("./produto/lerProdutos");
const { atualizarProduto } = require("./produto/atualizarProduto");
const { deletarProdutos } = require("./produto/deletarProdutos");


function exibirMenu() {
    console.log("=========================")
    console.log("1 - criar produto")
    console.log("2 - ler produto")
    console.log("3 - atualizar produto")
    console.log("4 - deletar produto")
    console.log("5 -  sair do sistema")
    console.log("=========================")

}
let opcao;
do {
    exibirMenu();
    opcao = parseInt(prompt("digite um opcao:"));
    let id;
    switch (opcao) {
        case 1:
            id = prompt("Digte a id")
            let nome = prompt("Digite o nome do produto")
            let categoria = prompt("Digite o categoria do produto")
            let fornecedor = prompt("Digite o fornecedor do produto")
            let precoPorUnidade = prompt("Digite o preco por unidade do produto")
            let quantidadeDisponivel = prompt("Digite a quantidade disponivel do produto")
            let dataColheita = prompt("Digite a data da colheita do produto")
            let certificacao = prompt("Digite o certificado do produto")
            criarProduto(id, nome, categoria, fornecedor, precoPorUnidade, quantidadeDisponivel, dataColheita, certificacao);
            listarProduto()
            break;
        case 2:
            id = prompt("Digte a id:");
            let novoNome = prompt("Digite o novo nome do produto:");
            let novoCategoria = prompt("Digite o novo categoria do produto:");
            let novoFornecedor = prompt("Digite o novo fornecedor do produto:");
            let novoprecoporUnidade = prompt("Digite o novo preco por unidade do produto:");
            let novoquantidadeDisponivel = prompt("Digite o novo quantidade disponivel do priduto:");
            let novodataColheita = prompt("Digite o novo data colheita do produto:");
            let novoCertificacao = prompt("Digite o novo certificacao do produto:");
            editarAluno(id, novoNome, novoCategoria, novoFornecedor, novoprecoporUnidade, novoquantidadeDisponivel, novodataColheita, novoCertificacao);
            break;
        case 3:
            id = prompt("Digite a id:");
            deelatarProdutos(id)
            break;
        case 4:
            listarProduto()
            break;
        case 5:
            deletarProdutos();
            listarProduto()
            break;
        default:
            console.log("Valor invalido!")
            break;
    }
} while (opcao !== 5);

