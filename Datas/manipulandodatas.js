//Manipular datas em JS

//comando básico para pegar data
let data = new Date()
// Pegando o dia, vai de 1 ate 31
let dia = data.getDate()
console.log(data)
console.log(dia) 
//Pegando o dia da semana - de 0 ate 6
 let diaSemana = data.getDay()
 console.log(diaSemana)
 const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
 let Semana = diaDaSemana[data.getDay()]
 console.log(Semana)
// Pegando o ano
let ano = data.getFullYear()
console.log(ano)
// Pegar o mês, ele vai pegar em números de 0 até 11, sendo Janeiro o 0 e 11 Dezembro. Para fazer com que exiba o nome, podemos criar um array
let mes = data.getMonth()
console.log(mes)
// Mostrar o Mês no formato escrito
const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesEscrito = mesesAno[data.getMonth()]
console.log(mesEscrito)
// Pegar a hora
let hora = data.getHours()
console.log(hora)
// Pegar minutos - 0 ate 59
let min = data.getMinutes() 
console.log(min)
// Pegar segundos - 0 ate 59
let segundos = data.getSeconds()
console.log(segundos)
// Pegar milisegundos - 0 ate 999
let milisegundos = data.getMilliseconds()
console.log(milisegundos)
// Pegar data no padrão brasileiro - dia, mes, ano
let dataBR = data.toLocaleString('pt-BR')
console.log(dataBR)
// Se eu quiser só a data
let soData = data.toLocaleString('pt-BR', { dateStyle: 'short' })
console.log(soData)
// Só a hora
let soHora = data.toLocaleString('pt-BR', { timeStyle: 'short' })
console.log(soHora)
// Pegar valores separados
let D = new Date()
let diaMes = D.getDate()
let meses = D.getMonth() + 1
let Anos = D.getFullYear()
function addZero(x) {return x<10 ? '0' + x : '' + x}
let dataPadraoBR = addZero(diaMes) + '/' + addZero(meses) + '/' + Anos
console.log(dataPadraoBR)
// Comparar datas - Maior ou Menor. Ex: Vencimentos
var hoje = new Date()
var vencimento = new Date(2024, 11, 30)

if (hoje > vencimento) {
    console.log("Sua conta está vencida!")
}
// Diferencas entre duas datas em dias / Se eu quiser saber quantos dias faltam para o final do ano
var datainicial = new Date()
var dataFinal = new Date(2024, 11, 31)
var difTempo = dataFinal.getTime() - datainicial.getTime()
var diferençaDias = Math.ceil(difTempo / (24 * 60 * 60 * 1000))
console.log(diferençaDias)
