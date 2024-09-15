var hora = 2
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 5 && hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18 && hora >= 12) {
    console.log (`Boa tarde!`)
} else if( hora > 18 && hora <= 23) {
    console.log(`Boa noite!`)
} else if (hora <= 5){
    console.log(`Boa Madrugada!`)
}