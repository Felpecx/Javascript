let num = document.querySelector('input#inpnum')
let form = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let valores = [] // array para posteriormente fazer a análise dos dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {   // -1 significa que não está no array  
        return true     
    } else {
        return false
    }        

}



function adicionar() {      // INICIOU FAZENDO ESSA FUNÇÃO E DEPOIS COLOCOU AS DE CIMA
      if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')   // option é para adicionar o elemento no select
        item.text = `Número ${num.value} adicionado`
        form.appendChild(item)
        res.innerHTML = ''      // limpar o res a cada vez que adiciono. Prestar atenção no HTML que deve ser maiúsculo
                  
      } else {
        window.alert('Valor inválido ou já encontrado na lista')
      }

      num.value = ''    // para apagar depois de adicionar
      num.focus()       // para o cursor voltar para a caixa automaticamente
    
    }


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]   // como vai analisando de cima para baixo, o maior até o momento é o que está na posição 0
        let menor = valores[0]     // mesma coisa
        let soma = 0
        let media = 0       
       //for (let pos = 0; pos < valores.length; pos++) poderia usar essa no lugar da de baixo tbm
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]     
        }
         
       media = soma / tot
       
       res.innerHTML = ''
       res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`        
       res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
       res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
       res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
       res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }  
}

       
  

 