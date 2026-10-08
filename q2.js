// dificuldade media para facil, alert para verrificaçao do usuario sobre a compra, const para perguntar tanto o saldo quanto o preco do produto
function verificarOrcamento(valorProduto, saldoDisponivel) {
    return saldoDisponivel >= valorProduto;
}

const valor = parseFloat(prompt("Digite o valor do produto:"));
const saldo = parseFloat(prompt("Digite o seu saldo disponível:"));


const resultado = verificarOrcamento(valor, saldo);

if (resultado) {
    alert(`Compra aprovada! Seu saldo de R$ ${saldo.toFixed(2)} é suficiente.`);
} else {
    alert(`Compra negada! O produto custa R$ ${valor.toFixed(2)}, mas você só tem R$ ${saldo.toFixed(2)}.`);
}