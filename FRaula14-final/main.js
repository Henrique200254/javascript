// Eventos são formas de disparar funções quando algo acontecer. Existem milhares de eventos.

// Um dos mais usados é o eventos onclick, que é disparado quando o usuarios clicar na tag ou elemento que recebe esse evento.
// O evento pode ser disparado via HTML, o parametro onclick='' ou com o método addEventListener(). No listener, vamos abrir uma aspa, dentro dela vai receber o evento e após a virgula vamos colocar o nome da função.
   const submit = document.querySelector('#submit-button')
   const form = document.querySelector('#my-form')
   const items = document.querySelector('.items')
   const erromsg = document.querySelector('.msg')
   submit.addEventListener('click', clicou)
   
   function clicou(evento) {
    evento.preventDefault()   
    submit.style.background = 'blue'
    
    const namevalue = nameinput.value
    console.log(namevalue)
    const emailvalue = email.value

    if (namevalue === "" || emailvalue === "") {
       // return alert('Por favor preencha os campos!')
       erromsg.textContent = 'Por favor preencha os campos!'
       erromsg.classList = 'error'
      setTimeout(() => {
         erromsg.textContent = ''
         erromsg.classList = ''
      }, 3000);
       return
    }

    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: ${namevalue}, Email: ${emailvalue}`
    items.appendChild(li)
    
    form.style.background = 'red'
   // items.firstElementChild.textContent = namevalue
    //items.children[1].textContent = emailvalue
    
    nameinput.value = ''
    email.value = ''
 


   }

   // Ele não está ficando com a cor permanentemente porque é um input dentro de um formulário, ele está enviando os dados e recarregando a pagina. Mas da para ver que muda de cor na hora do clique. para resolver isso passamos um parametro que é o proprio Evento e depois colocamos o método .preventDefault() ele impede o comportamento padrão.
/*
submit.addEventListener('click', function () {
    submit.style.background = 'blue'
   })
    */

   // O target guarda o valor que temos no momento dentro do input

   const nameinput = document.querySelector('#name')
   const email = document.querySelector('#email')

   // joguei a variavel que recebeu nameinput lá dentro da função.

   nameinput.addEventListener('change', function(e) {
     console.log(e.target.value)
   })

   // Change é um evento para quando houver alguma alteração no elemento.

   //por meio desse listener e do atributo target, verificamos o valor atual do input. Então após digitar um valor e enviar, se escrevermos novamente um valor no input, conseguimos ver ele no console.

   // Por meio do return obrigamos uma função a ser encerrada ali caso a condição seja verdadeira. Assim impedimos das linhas abaixo serem lidas. Ajuda muito para controle e validação.

   // Podemos adicionar uma classe de nosso CSS no elemento ou variavel do Javascript, fazemos isso colocando '.classList' numa variavel. E depois do '=' colocamos o nome das classes entre aspas que a variavel irá receber.

   // Podemos usar o método createElement() para criar tags e elementos HTML via Javascript, permitindo criar elementos dinâmicamente na nossa página. Dentro do parentesis colocamos o nome da tag. Mas junto com ela, para exibir na tela o nosso elemento precisamos tronar ele filho de outro. Para isso usamos o método appendChild(). Dentro do parentesis de appendChild colocamos a variavel que recebeu o createElement.

   // Por meio da função setTimeout podemos configurar o tempo em que uma mensagem ficará sendo exibida. Na parte debaixo do exemplo, fica escrito Timeout, nele colocamos em milisegundos o tempo em que o elemento ficará sendo exibido. Dentro da função colocamos o elemento que queremos apagar a mensagem por exemplo, repetindo a variavel e colocando ela para receber " ", e retirando uma classe de CSS também colocando para receber ''.