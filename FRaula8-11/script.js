//Estruturas Condicionais
// Temos três tipos: Simples(apenas if), Composta(If, else), Aninhada(IF, Else if, else)

const sum = 1 + 2
/*
if (sum === 2) {
    console.log("Igual a dois!")
} else if (sum == 3) {
    console.log('É igual a três!')
} else {
    console.log('Numero diferente')
}
*/
// Temos operadores lógicos como && ('E') e o || ('OU') e o ! (diferente)

const sum1 = 2 + 2
const sum2 = 3 + 10

if (sum1 == 4 && sum2 == 6) {
    console.log("sum1 é 4 e sum2 é 6")
}

if (sum1 == 4 || sum2 == 6) {
    console.log("sum1 é 4 e sum2 é 12")
}

// Operador Ternário define variaveis baseando-se em uma condição.
// Essa interrogação é uma forma de fazer uma condicional, ela é basicamente um If else. Ao lado dela colocamos a função.
// Então Number1 é nosso operador ternário. Ele esta recebendo a variavel Sum recebendo 2, daí temos a interrogação do If Else, se Sum for igual a dois, como vemos na condição, Number1 recebe 2, senão ele recebe 4. O que fica imediatamente após a interrogação é o If e apos esse é o Else. 

let number1 = sum === 2 ? 2 : 4

console.log(number1)
//ambos são a mesma coisa só que feitos de forma diferente
/*
let number
if (sum === 2) {
    number = 2
} else {
    number = 4
}
*/

// Estrutura Condicional Escolha caso (Switch)

const car = 'Mercedez'

switch (car) {
    case 'Mercedez':
      console.log('Mercedez')
      break
    
    case 'Ferrari':
      console.log('Ferrari')
      break
    
    case 'Tesla':
      console.log('Tesla')
      break
    
    default : 
      console.log('Outra Marca!')

}

// Conceito de True e False: Por meio de !! podemos saber se uma variavel é True ou False.
// Uma string vazia sempre vai ser False
const x = ''
console.log(!!x)

// Valores iguais a zero são false

const y = 0
console.log(!!y)

// Variaveis nulas e Undefined também são False

const a = null
const u = undefined
console.log(!!u)
console.log(!!a)

// Então se colocarmos qualquer uma dessas variaveis dentro de um If ele não será executado, pois esse valores dessas variaveis sempre são false

// Uma lista (array) vazia é True. E o mesmo vale para Objetos. Isso será muito util para checar se um array ou objeto está vazio. Para isso use o metodo .length após a variavel objeto.

const lista = []
const objeto = {}
console.log(!!lista)
console.log(!!objeto)

if (lista.length === 0) {
    console.log(lista)
}

// Quando colocamos apenas ! estamos invertendo o booleano. Então tudo que antes era verdadeiro passa a ser false.

console.log(!false)

//Funções e Arrow Functions. Uma função vai executar uma determinada ação após receber uma chamada, ela executará um bloco, e após seu término, o programa seguirá.

function soma (a, b) {
    console.log(a + b)
}

soma(5, 3)

function subtração (a=5, b=0) {
    return a - b
}

const resultado = subtração (10, 5)
console.log(resultado)
// Essa variavel está recebendo o resultado da função subtração

//Caso tenhamos dois parametros nominais e passemos apenas um parametro Real. O resultado da função será NAN (Not a Number), para impedir isso, podemos setar um valor padrão lá no parametro nominal. colocamos '='

// Arrow Function, vamos precisar criar uma variavel, colocar ela para receber parametros '(a,b)' e depois colocar uma arrow function => e abrir chaves {}

const arco = (a,b) => {
    return a * b
}

const Farco = arco(5,10) 
console.log(Farco)

// podemos simplificar ainda mais retirando as chaves e o return.

//const arco = (a,b) => a * b

// Programação Orientada a Objetos (POO): As Classes em Javascript são basicamente impressoras de objetos, nos conseguimos definir uma Entidade, por exemplo, uma pessoa, e imprimir um objeto dessa Entidade.

// Para criar uma classe vamos usar Class
// Criamos a classe person.
// Dentro da função constructor vamos colocar o que essa classe terá como propriedade
// Assinalamos essas propriedades (nome, sobrenome e idade) a person usando This
class Person {
    construtor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

// Agora vamos torna person numa instância, usamos a key word New. Depois vamos passar os parametros que o constructure recebe. Essa função é executada sempre que essa classe é instânciada.

let person = new Person("Jane", "Watkins", "18")
console.log(person)


