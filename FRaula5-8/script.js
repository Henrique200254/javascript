const pessoa = {
    Nome: 'Henrique',
    sobrenome: 'Castilho',
    idade: 22,
    hobbies: ['videogames', 'filmes', 'futebol']
}
/*
const primeironome = pessoa.Nome
const sobrenome = pessoa.sobrenome
const idade = pessoa.idade
const hobbies = pessoa.hobbies
console.log(pessoa)

*/
/*
console.log(Nome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies)
const hobbiesf = pessoa.hobbies[2]
console.log(hobbiesf)
*/


//Destructuring, é uma foma mais prática de acessar as propriedades de um objeto e exibir os seus valores. Consiste em inverter a ordem de criação de uma objeto, so que do lado direito deverá ter um objeto já criado. É a mesma coisa que fizemos acima, só que mais prático.

//const { Nome, sobrenome, idade, hobbies } = pessoa
 /*
console.log(Nome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies)
const hobbiesf = pessoa.hobbies[2]
console.log(hobbiesf)
*/
// Podemos adicionar outras propriedades a um objeto já criado. Fazemos isso colocando '.' e o nome da propriedade que vamos criar após o objeto.

pessoa.dog = 'Lady'
console.log(pessoa)

// Conseguimos criar um aninhamento de objetos, colocando um objeto dentro de outro.

const outrapessoa = {
    nome: 'Felipe',
    sobrenome: 'Chaves',
    idade: '35',
    hobbies: ['Correr', 'jogar bola', 'Jogar no tigrinho'],
    dog: {
        name: 'Messi',
        age: '10'
    }
}

const {
    nome, sobrenome, idade, hobbies, dog: {name
},} = outrapessoa
console.log(outrapessoa)
console.log(name)
//console.log(outrapessoa.dog.nome)

// Listas com objetos, criamos uma lista que aninha varios objetos.

const todos = [
    {
       id: 1,
       descricao: 'Estudar programação',
       completo: false
    },

    {
        id: 2,
        descricao: 'Ler',
        completo: true
    },

    {
        id: 3,
        descricao: 'dirigir',
        completo: true
    },
]
// Filtrei abaixo uma das propriedades de um dos objetos da minha lista/ Array
const descricao = todos[2].descricao
console.log(descricao)
console.log(todos)


//JSON, quando estamos transitando dados entre o Front-end e o Back-end a gente não consegue enviar um array ou um objeto Javascript. A gente envia esse array ou objeto como JSON. Ele vai converter nossa lista ou objeto para uma String em formato JSON, por isso ele muda sua exibição. 

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)

// Para transformar o JSON em formato de lista. Parse() é um metodo para converter String para Number

const todosList = JSON.parse(todosJSON)
console.log(todosList)


//Loops, servem para repetição de codigos, poupa linhas, além de fazer operações e ajudar a resolver problemas.

for (let index = 0; index < 10; index++) {
    console.log(index)
}

const carros = ['Mercedes', 'Tesla', 'Ford']

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}

for (i of carros) {
    console.log(i)
}

carros.forEach(function(carro, indice) {
     console.log(carro)
     console.log(indice)
})


// No caso de While minha variavel não pode ser Const

let c = 0

while (c < 10) {
    console.log(c)
    c = c + 1
}

let person = {
    nome: 'Jane',
    idade: 18
}

for (key in person) {
    console.log(person[key])
}