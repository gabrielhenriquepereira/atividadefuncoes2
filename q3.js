//MUito dificil, let  paras as opcoes de convercao, e aprendi que a funcao parseFloat serve para converter letras em numeros. tipo o Notanumber
function menuConversor() {
    
    const TAXA_EURO = 6.10;
    const TAXA_DOLAR = 5.50;
    
    let continuar = true;

    while (continuar) {
        
        let opcao = prompt(
            "=== MENU DE CONVERSÃO DE MOEDAS ===\n" +
            "a. Converter de real para euro\n" +
            "b. Converter de euro para real\n" +
            "c. Converter de real para dólar\n" +
            "d. Converter de dólar para real\n" +
            "e. Fechar o programa\n\n" +
            "Escolha uma opção:"
        );

      
        if (opcao === null) {
            opcao = 'e';
        }

       
        opcao = opcao.toLowerCase().trim();

        if (opcao === 'e') {
            alert("Encerrando o programa. Até mais!");
            continuar = false; 
        } 
        else if (opcao === 'a') {
            let real = parseFloat(prompt("Digite o valor em Real (R\$):"));
            let euro = real / TAXA_EURO;
            alert(`Resultado: R$ ${real.toFixed(2)} é igual a € ${euro.toFixed(2)}`);
        } 
        else if (opcao === 'b') {
            let euro = parseFloat(prompt("Digite o valor em Euro (€):"));
            let real = euro * TAXA_EURO;
            alert(`Resultado: € ${euro.toFixed(2)} é igual a R$ ${real.toFixed(2)}`);
        } 
        else if (opcao === 'c') {
            let real = parseFloat(prompt("Digite o valor em Real (R\$):"));
            let dolar = real / TAXA_DOLAR;
            alert(`Resultado: R$ ${real.toFixed(2)} é igual a $ ${dolar.toFixed(2)}`);
        } 
        else if (opcao === 'd') {
            let dolar = parseFloat(prompt("Digite o valor em Dólar (\$):"));
            let real = dolar * TAXA_DOLAR;
            alert(`Resultado: $ ${dolar.toFixed(2)} é igual a R$ ${real.toFixed(2)}`);
        } 
        else {
            alert("Opção inválida! Por favor, escolha uma letra de 'a' a 'e'.");
        }
    }
}


menuConversor();