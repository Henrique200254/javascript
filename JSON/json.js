/*JSON significa JavaScript Object Notation que traduzido é Notação de Objeto JavaScript.
JSON é basicamente uma forma de converter um objeto em texto e de texto para objeto.
Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido praticamente por toda linguagem de programação.
Para trabalhar com JSON usamos dois métodos:
JSON.parse() -> converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON.
Como exemplo, podemos usar o objeto carro que criamos anteriormente.
Se mandarmos um objeto para uma TAG mostrar o que tem nele por meio de InnerText, ele vai exibir [Object] isso porque objeto é algo abstrato, que só a linguagem de programação consegue entender.
Entao precisamos transformar em padrão de texto.
Let texto = JSON.stringify(carro)
Agora se injetamos em uma TAG esse texto, ele vai conseguir ler os dados do objeto.
*/

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.0", "1.4", "1.6"]
}
    
// Convertendo para texto
let texto = JSON.stringify(carro)
console.log(texto)
// Convertendo para objeto
let obj = JSON.parse(texto)
console.log(obj.modelo)
console.log(obj.motor[2])

//Também podemos adicionar arrays dentro desses arquivos JSON

// Veremos um uso disso na prática, por exemplo o ViaCEP, ela é uma API ou um serviço que pode passar na URL um valor que ele vai me retornar um JSON. Como é um texto simples qualquer sistema consegue ler. Mas para trabalhar com alguma propriedade do arquivo de texto que conseguimos vamos ter que transformar em objeto.
// Vamos fazer uma solicitação para esse site, de que vamos pegar esse texto. Usamos uma requisição Ajax. O XMLHttpRequest é um método de fazer requisição a um site sem acessar ele no navegador. Pedindo para acessar as informações de forma remota.
const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/')
ajax.send()

ajax.onload = function() {
    document.getElementById('area').innerHTML = this.responseText
    let objeto = JSON.parse(this.responseText)
    //alert(objeto.ddd)
}

function buscarCEP() {
    let input = document.getElementById('cep').value
     
    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input + '/json/')
    ajax.send()

    ajax.onload = function() {
       //document.getElementById('texto').innerHTML = this.responseText
       //transformei o texto em objeto
       let conversao = JSON.parse(this.responseText)
        // Peguei os valores que queria
       let logradouro = conversao.logradouro
       let cidade = conversao.localidade
       let estado = conversao.uf

       document.getElementById('texto').innerHTML = "logradouro:" + logradouro + "<br> Cidade: " + cidade + "<br> Estado:" + estado
 }

}



