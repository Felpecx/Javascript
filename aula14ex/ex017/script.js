function tabuada() {
    var n = window.document.getElementById('txtnum')
    var t = window.document.getElementById('tabs')
    if (n.value.length == 0) {
        window.alert('Coloque número') 
   } else {
     var num = Number(n.value)
     var c = 1
     t.innerHTML = ''     // esse serve pra limpar a tabuada a cada tentativa
  
    while (c <= 10) {                  // posso usar o for também, que é melhor.
        var item = document.createElement('option')    
        item.text = `${num} x ${c} = ${num*c}`
        c++
        t.appendChild(item)

    }
   }
   
   
}