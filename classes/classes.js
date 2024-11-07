class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }

    buzina() {
        return `${this.modelo}, biiiiiiiiii`
    }
}

const uno = new Carro('Fiat', 'uno', 2001)
const gol = new Carro('volkswagen', 'Gol', 2013)
console.log(uno)
console.log(gol)
console.log(gol.ano)
console.log(uno.buzina())

/* const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001
}
*/