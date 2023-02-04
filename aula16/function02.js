function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(2, 8))


// posso fazer da seguinte forma para considerar o n1 = 0 ou n2 = 0, no caso de ter incluído somente um número no console.log(soma(2)):

function soma (n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))