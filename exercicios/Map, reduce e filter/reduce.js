let numeros = [1, 2, 3, 4, 5, 6]

let soma = numeros.reduce((acumulador, atual) => {
    const total = acumulador + atual
    return total
})

console.log(soma)
// a contagem começa sempre com 0, 0 e o primeiro número.