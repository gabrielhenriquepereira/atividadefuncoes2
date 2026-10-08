// dificuldade facil ,usei return para o calculo prompt para perguntar o captal e taxa junto com meses
function calcularJurosSimples(capital, taxa, tempo) {
    return capital * (taxa / 100) * tempo;
}


const capitalEscolhido = parseFloat(prompt("Digite o valor do Capital (R\$):"));
const taxaEscolhida = parseFloat(prompt("Digite a taxa em porcentagem (%):"));
const tempoEscolhido = parseFloat(prompt("Digite o tempo em meses:"));


const jurosFinais = calcularJurosSimples(capitalEscolhido, taxaEscolhida, tempoEscolhido);

alert(`O valor dos juros é: R$ ${jurosFinais.toFixed(2)}`);