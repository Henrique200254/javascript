let cidade = 500.000

if (cidade >= 300.000) {
    console.log(`Cidade Grande!`)
} else {
    console.log(`Cidade pequena!`)
}

function soma (n1,n2) {
    soma = n1 + n2
    console.log(soma)
}

soma(5, 15) 

function adicao(n1, n2) {
    adicao = n1 + n2
    return adicao
}

let teste = adicao (20, 50)
console.log(teste)

function endividado(receita, gastos) {
    if (receita > gastos) {
        return "Lucro"
    } else {
        return "endividado"
    }
}

let saldo = endividado(2000, 1000)
let Felipe_saldo = endividado(500, 3000)
console.log(saldo)
console.log(Felipe_saldo)

// Arrow Function

let meunome = () => {
    console.log('Henrique')
}

meunome()

let outronome = (nome1, nome2, nome3) => {
    console.log('Henrique')
}

outronome()