var boton = document.getElementById('boton')
var botoff = document.getElementById('botoff')
var sala = document.getElementById('sala')

function ligar() {
    var imagem = document.getElementById('botaopower');
    imagem.style.display = "block";
    document.body.style.backgroundColor = "white";
}

function desligar() {
    var imagem = document.getElementById('botaopower');
    // imagem.style.display = "none";
    document.body.style.backgroundColor = "black";
}

 
    