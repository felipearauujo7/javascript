function calcular() {
    var txti = document.getElementById('txtinicio')
    var txtf = document.getElementById('txtfim')
    var txtp = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')


    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br> '
        var inicio = Number(txti.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)
        if (passo <= 0) {
            alert('Passo invalido! considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            // contagem crescente
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            // contagem regressiva
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
    }
    res.innerHTML += `\u{1f3c1}`

}