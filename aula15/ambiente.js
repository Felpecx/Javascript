let num = [5, 8, 9, 2, 4]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
console.log(pos) // aparece -1 pq não existe o número 3 no array

