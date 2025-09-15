import {PALAVRAS_RUINS} from "./palavrasruins";

const botaoMostraPalavras = document.querySelector('#botao-palavraschave');

botaoMostraPalavras.addEventListener ('click', mostraPalavrasChave);

function () {
    const texto = document.querySelector ('entrada-de-texto').value;
    const campoResultado = document.querySelector (#resultado-PalavrasChave);
    const palavrasChave = processa.Texto (texto);

    campoResultado.textContent = palavrasChave,join(",");
}

function processaTexto(texto){
let palavras = texto.split(/\P{L}+/u);

for(let i in palavras){
palavras (i) = palavras(i).toLowerCase();
}

palavras = tiraPalavrasRuins(palavras)

const frequencias = contaFrequencias(palavras);
let ordenadas = Object.keys(frequencias).sort(ordenapalavra);

function ordenaPalavra(p1,p2){
    return frequencias(p2) - frequencias(p1)
}
}