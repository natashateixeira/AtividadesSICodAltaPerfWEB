var objeto = null;

function moverDireita(){
            objeto = document.getElementById("minhadiv");
            var posicaoAtual = parseInt(objeto.style.left) || 0;
            var novaPosicao = posicaoAtual + 10;
            objeto.style.left = novaPosicao + "px";
}
function moverEsquerda() {
            objeto = document.getElementById("minhadiv2");
            var posicaoAtual = parseInt(objeto.style.right) || 0;
            var novaPosicao = posicaoAtual + 10;
            objeto.style.right = novaPosicao + "px";
}