// Eventos são formas de disparar funções quando algo acontecer. Existem milhares de eventos.

// Um dos mais usados é o eventos onclick, que é disparado quando o usuarios clicar na tag ou elemento que recebe esse evento.
// O evento pode ser disparado via HTML, o parametro onclick='' ou com o método addEventListener(). No listener, vamos abrir uma aspa, dentro dela vai receber o evento e após a virgula vamos colocar o nome da função.
   const submit = document.querySelector('#submit-button')
   const form = document.querySelector('#my-form')
   const items = document.querySelector('.items')
   submit.addEventListener('click', clicou)
   
   function clicou(evento) {
    evento.preventDefault()   
    submit.style.background = 'blue'
    
    const namevalue = nameinput.value
    console.log(namevalue)
    const emailvalue = email.value

    if (namevalue === "" || emailvalue === "") {
       return alert('Por favor preencha os campos!')
    }
    
    form.style.background = 'red'
    items.firstElementChild.textContent = namevalue
    items.children[1].textContent = emailvalue


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