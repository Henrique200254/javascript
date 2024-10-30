let amigo = {nome: 'José', peso: 85.4, sexo: 'M', 
    engordar(p) {
      console.log('Engordou')
      this.peso += p
}
}
amigo.engordar(2)
console.log( amigo)
console.log(` ${amigo.nome} pesa ${amigo.peso}kg`)

const carro = {marca: "ford", modelo: "ka", ano: 2015, placa: "ABC-1234", buzina: function () {let texto = "biiiii"
  return texto
},
completo: function () {
   return "A marca é "+ this.marca + " e o modelo é " + this.modelo
}
}
// para pegar o valor de marca e jogar na propriedade completo usamos o This, que é um elemento de classe para chamar elementos e funções. Parece que quando eu coloco uma função dentro de uma propriedade de objeto ela funciona como classe.
console.log(carro.buzina())
console.log(carro.completo())