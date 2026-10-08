//media, duas functions uma calcula a quantidade 
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

const nomeDigitado = prompt("Digite o nome do produto:");
const precoDigitado = parseFloat(prompt("Digite o preço do produto :"));
const qtdDigitada = parseInt(prompt("Digite a quantidade:"));

const itemAtual = { 
    preco: precoDigitado, 
    quantidade: qtdDigitada 
};

const carrinho = [itemAtual];

const subtotal = calcularSubtotalItem(itemAtual);
const totalGeral = calcularTotalCarrinho(carrinho);

alert(
    "Produto: " + nomeDigitado + "\n" +
    "Subtotal do item: R$ " + subtotal.toFixed(2) + "\n\n" +
    "TOTAL DO CARRINHO: R$ " + totalGeral.toFixed(2)
);