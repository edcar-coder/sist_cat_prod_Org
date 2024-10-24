const prompt = require( "prompt-sync")();

const { criarProduto } = require("./produto/criarProduto");
const { lerProduto } = require("./produto/lerProdutos");
const { atualizarProduto } = require("./produto/atualizarProduto");
const { deletarProduto }   = require("./produto/deletarProduto");

const produto1 = criarProduto(1, "nome", "categoria", "fornecedor", "precoporUnidade", "quantidadeDisponivel", "dataColheita", "Certificação");
const atualizar1 = atualizarProduto(1, "edcarlos","estudante","Casas Bahia","R$20,50","80","24/10","1234")

lerProduto();




