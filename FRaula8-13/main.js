// const addUser = document.getElementById('add-user')

const addUser = document.querySelector('#add-user')

addUser.innerText = 'Adicionar Usuario'
addUser.style.color = 'Blue'

const form = document.querySelector('.container #my-form')
form.style.background = 'green'

// selecionamos elementos do navegador usando a árvore DOM. pegamos o H1 e demos o id de add-user, depois manipulamos para mudar seu texto via javascript.

// Com QuerySelector, que é mais moderno, conseguimos acessar o Id do formulário que estava dentro da Section de classe .Container
// Se tivermos tres elementos com mesma classe, ele vai retornar o primeiro elemento. Por isso, abaixo veremos como selecionar multiplos elementos, que é com QuerySelectorALL()

const allItens = document.querySelectorAll('.item')



 // console.log(allItens[1])

// Podemos selecionar elementos pela classe por meio de GetElementsByClassName()

// Manipulando itens do DOM

// Apagando itens do DOM: podemos usar o método Remove() para apagar itens ou Elementos. E o firstElementChild.remove() nos permite apagar apenas o primeiro elemento de uma classe. Com lastElementChild.remove() apagamos o ultimo.

const item = document.querySelector('.items')
//item.remove()
item.firstElementChild.remove()
item.lastElementChild.remove()

// O atributo Children permite selecionar os filhos de um elemento, utilizando o indice. Tmabém podemos selecionar o ultimo com lastElementChild.
item.children[0].textContent = 'primeiro item'
item.lastElementChild.innerHTML = 'Ultimo item!'

// Podemos fazer configurações de estilo utilizando após atribuir a uma variavel alguma tag ou Elemento do DOM. Utilizamos document.style.

const button = document.querySelector('.btn')
button.style.background = 'red'
