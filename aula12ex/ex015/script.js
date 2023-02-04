function verificar() {
    var data = new Date()       // data atual
    var ano = data.getFullYear()   // ano atual
    var fano = window.document.getElementById('txtano')   // formulario ano
    var res = window.document.querySelector('div#res') // posso usar o getElementbyId tbm
    if (fano.value.length == 0 || fano.value > ano) {   // if para erro
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {                                                // else para quando não há erro, rodar a função
        var fsex = document.getElementsByName('radsex')     // pegar input da bolinha (radio)
        var idade = ano - Number(fano.value)                // ano atual menos o que coloquei no form
        var gênero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
                        
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}