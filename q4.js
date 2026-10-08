//medio, um codigo de prompts que tive dificuldade apenas por erro de linhas
function exibirResumoProduto({ nome, preco, quantidade }) {
    return `Produto: ${nome} | Preço: R$ ${Number(preco).toFixed(2)} | Estoque: ${quantidade} unidades.`;
}


const nomeEscolhido = prompt("Digite o nome do produto:");
const precoEscolhido = parseFloat(prompt("Digite o preço do produto (use ponto para centavos):"));
const quantidadeEscolhida = parseInt(prompt("Digite a quantidade em estoque:"), 10);


const itemEstoque = {
    nome: nomeEscolhido,
    preco: precoEscolhido,
    quantidade: quantidadeEscolhida
};


const resumo = exibirResumoProduto(itemEstoque);


alert(resumo); 
console.log(resumo);