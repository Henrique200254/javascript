// For, For In, For OF, ForEach

let users = ['Maria', 'João', 'Paulo']
/*
for (let nome of users) {
    console.log(nome)
}

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}
*/
/*
let pessoas = {
     nome: 'Paulo',
     idade: 33,
     sexo: 'M'

}

for (let c in pessoas) {
    console.log(c + ': ' + pessoas[c])
}
*/


let usuarios = [
    { Nome: 'Paulo', idade: 35, contato: '(71) 98533-6945' },
    { Nome: 'Zacarias', idade: 52, contato: '(71) 93645-8746' },
    { Nome: 'Felipe', idade: 23, contato: '(71) 95512-3785'},

]
/*
usuarios.forEach((element, index, array) => {
    console.log(element)
    console.log(index)
    
});
*/
/*
usuarios.forEach(function (elemento, index, array) {
    console.log(elemento)
    console.log(index)
    
});
/*
array.forEach(element => {
    
});
*/

// Exercicio: determinar de acordo com a idade se alguém é jovem, Adulto, ou velho.


usuarios.forEach((element) => {
    if (element.idade > 50) {
        console.log(`Idoso`)
    } else if (element.idade > 18) {
        console.log(`Adulto`)
    } else {
        console.log(`Jovem`)
    }
});
