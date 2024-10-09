/*
alert('Hello World!')
*/
// AUla 2

/* 
temos tres formas de declarar variaveis: var, let e const.
var já esta mais antiga e não recomendada, isso porque ela não segue escopo de bloco.
let tem escopo de bloco e permite a alteração de dados que está dentro da variavel.
Const é uma constante, ela não permite que voçê altere os dados jogados nela.
*/

const mensagem = "Olá mundo"

console.log(mensagem.length)

// .length nos permite saber quantos caracteres uma variavel tem

const firstName = "Henrique"
const lastName = "Castilho"
console.log(`Meu primeiro nome é ${firstName.toUpperCase()} e o ultimo é ${lastName.toLowerCase()}`)

//toUpperCase() deixa tudo em maiúsculo e toLowerCase() em minusculo
// split() nos permite fazer corte dos dados que estão na variavel para fazer uma lista

const name = 'Jonas,julia,joão'
console.log(name.split(","))

const number = 5
console.log(number + 10)
console.log(number.toString())

//com o método toString() conseguimos converter numeros em strings. E com Number() convertemos strings para números.
//typeof nos permite saber o tipo de uma variavel.

console.log(typeof number)

// Booleanos: False e True

// Null e Undefined. Quando eu coloco uma variavel para ter Null, quer dizer que estou criando ela sem nenhum valor, é como se estivesse vazio. E Undefined é como se a variavel não estivesse sido definida ainda, como se eu não estivesse decidido o que fazer com a variavel.

const x = null
const y = undefined

// Arrays são um tipo de lista, é uma variavel que armazenamos varios dados. []

const lista = [1, 2, 3, 4, 5, 6]

//Objetos podem guardar propriedades e valores {}

const objeto = {Nome: 'João', idade: 45}

// Aula 3 Lista ou Arrays

const names = ['João', 'Felipe', 'Carlos', 10, false]
console.log(names)
console.log(names[1])
//com [1] consegui escolher o dado que estava na casa 1 do array. Começa do 0 e assim vai.

// O javascript não é uma linguagem tipada, então ela deixa misturar dados de diferentes tipos, para resolver isso só com Typescript, que é uma linguagem feita em cima do Javascript.

//.push() adiciona um elemento no final do array

names.push('Jack')
console.log(names)

// .shift() remove o elemento da lista.

names.shift()
console.log(names)

// unshift adiciona um elemento no inicio do array

names.unshift('Henrique')
console.log(names)

// .pop() me permite remover o ultimo elemento da lista

names.pop(5)
names.pop()
console.log(names)

// podemos reassinalar valores, mudar valores da forma abaixo

names[0] = 'HenriqueC'
console.log(names)

// Mesmo sendo com const conseguimos mudar os valores, isso porque foi em uma lista, agora para mudar um valor 'diretamente' não tem como. ex: names = 'teste'

//conseguimos decobrir o indice de um elemento com .indexOf()

console.log(names.indexOf('HenriqueC'))

// com .sort() podemos ordenar os valores de uma lista, do menor para o maio, serve para numeros e caracteres

console.log(names.sort())

// podemos fazer uma verificação se uma variavel é um Vetor ou Array com Array.isArray(), só funciona se atribuir a uma variavel.

let namesisarray = Array.isArray(names)
console.log(namesisarray)

// MAP, é um metodo muito usado para multiplicar valores de um array. Ele vai executar uma função com cada um dos elementos do array e retornar o resultado em uma lista ou array novo.

 numerosmultiplicados = lista.map(numeros => {
    return numeros * 2
 })

 /*
   OU

   numerosmultiplicados = lista.map(function(numeros) {
        return numeros * 2
   })
 */

 console.log(numerosmultiplicados)


 // Filter vai filtar uma lista ou array e retornar uma lista nova baseado no filtro que passamos.

 const age = [13, 25, 22, 37, 43, 50]

 const evenAges = age.filter(function (numeros) {
     return numeros % 2 == 0
 })

console.log(evenAges)

// Reduce, ele é muito util quando queremos reduzir todos os valores de uma lista. Reduzimos todos eles a apenas um número. Ele sempre tem dois parâmetros: numeros e Acumulador. O acumulador seria o Total. No caso de uma soma ele seria o valor final e também um dos valores operados durante a execução. Ele começa com 0 e vai recebendo valores a medida que a operação vai ocorrendo. Sempre depois das chaves devemos especificar o valor inicial do acumulador, com ',' e depois o número.

const somaIdade = age.reduce(function(age, acumulador) {
    return acumulador + age
},0)

console.log(somaIdade)