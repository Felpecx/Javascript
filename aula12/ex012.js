var hora = 12
console.log(`Agora são exatamente ${hora} horas`)
if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12 && hora >= 6) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18) {
    console.log('Boa noite!')
} 
