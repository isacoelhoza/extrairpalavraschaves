import {PALAVRAS_RUINS} from "./palavrasruins";

const botaoMostraPalavras = document.querySelector('#botao-palavraschave');

botaoMostraPalavras.addEventListener ('click', mostraPalavrasChave);

function () {
    const texto = document.querySelector ('entrada-de-texto').value;
    const campoResultado = document.querySelector (#resultado-PalavrasChave);
    const palavrasChave = processa.Texto (texto);
}
campoResultado.textContent = palavrasChave,join(",");