function parimpar(n) {
    if(n%2 == 0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }   
}

let resultado = parimpar(8)
console.log(resultado)

// ou posso simplesmente chamar diretamente sem colocar em variável
// console.log(parimpar(8))