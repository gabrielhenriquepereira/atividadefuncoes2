// media duas functions uma para dar retur e outra para fazer calculos e const prompt para pedir e mostrar a quantidade e o valor
function calcularSubtotalItem(item) {
    return item.preco * item.quantidade;
}

function calcularTotalCarrinho(carrinho) {
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) {
        total += calcularSubtotalItem(carrinho[i]);
    }
    return total;
}

const preco1 = Number(prompt("Digite o PREÇO do Produto 1:"));
const qtd1 = Number(prompt("Digite a QUANTIDADE do Produto 1:"));


const preco2 = Number(prompt("Digite o PREÇO do Produto 2:"));
const qtd2 = Number(prompt("Digite a QUANTIDADE do Produto 2:"));


const meuCarrinho = [
    { preco: preco1, quantidade: qtd1 },
    { preco: preco2, quantidade: qtd2 } 
];

const valorTotal = calcularTotalCarrinho(meuCarrinho);

alert(`O valor total da sua compra é: R$ ${valorTotal.toFixed(2)}`);