// dificil por ser muito grande e complexo, function para calcular o tempo das musicas,let resumo usado para fazerr a tabela da pleilist

function converterParaSegundos(minutos, segundos) {
    return (minutos * 60) + segundos;
}

function calcularTempoPlaylist(playlist) {
    let tempoTotalSegundos = 0;
    for (let i = 0; i < playlist.length; i++) {
        const musica = playlist[i];
        tempoTotalSegundos += converterParaSegundos(musica.minutos, musica.segundos);
    }
    return tempoTotalSegundos;
}

const minhaPlaylist = [];

const qtdInput = prompt("Bem-vindo ao Gerenciador de Playlist!\n\nQuantas musicas voce quer adicionar?");
const quantidade = parseInt(qtdInput);


if (!isNaN(quantidade) && quantidade > 0) {
    
    
    for (let i = 1; i <= quantidade; i++) {
        const titulo = prompt("Musica " + i + " de " + quantidade + "\n\nDigite o TITULO da musica:");
        
        const minInput = prompt("Musica " + i + ": " + titulo + "\n\nDigite os MINUTOS de duracao:");
        const minutos = parseInt(minInput) || 0;

        const segInput = prompt("Musica " + i + ": " + titulo + "\n\nDigite os SEGUNDOS de duracao:");
        const segundos = parseInt(segInput) || 0;

     
        minhaPlaylist.push({
            titulo: titulo || "Musica " + i,
            minutos: minutos,
            segundos: segundos
        });
    }


    const tempoTotal = calcularTempoPlaylist(minhaPlaylist);

  
    let resumoDestaPlaylist = "--- RESUMO DA SUA FILA ---\n\n";
    minhaPlaylist.forEach((musica, index) => {
        resumoDestaPlaylist += (index + 1) + ". " + musica.titulo + " (" + musica.minutos + "m " + musica.segundos + "s)\n";
    });
    resumoDestaPlaylist += "\nTempo total da playlist: " + tempoTotal + " segundos.";


    alert(resumoDestaPlaylist);

} else {
    alert("Operacao cancelada ou nenhuma quantidade valida foi digitada.");
}