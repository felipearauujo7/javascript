function entrar () {
    var txt = document.getElementById('txtentrar')
    var entrar = document.getElementById('botaoentrar')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (txt.value == 'Felipe') {
        alert('Ola, seja bem vindo!')
        img.setAttribute('src', 'anonimo.jpg')
        document.body.appendChild(img)
    } else {
        alert('[ERROR 404!]')
    }
    
}

