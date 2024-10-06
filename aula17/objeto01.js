let amigo = {nome: 'José', peso: 85.4, sexo: 'M', 
    engordar(p) {
      console.log('Engordou')
      this.peso += p
}
}
amigo.engordar(2)
console.log( amigo)
console.log(` ${amigo.nome} pesa ${amigo.peso}kg`)
