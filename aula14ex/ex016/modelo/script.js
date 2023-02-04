function contar() {
    var inicio = window.document.getElementById('txtnumin')
    var fim = window.document.getElementById('txtnumfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        if (passo <=0) {
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }
        if (i < fim) {
            // contagem crescente
            for(var c = i; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`          // código emoji do unicode é U+1F449 - para usar no javascript coloco \u{1F449} (SÓ FUNCIONA ENTRE CRASES)
            }
            res.innerHTML += `\u{1F3F4}`
        } else {
            // contagem regressiva
            for(var c = i; c >= fim; c-= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3F4}`
        }
        
    }

}