
let input = document.querySelector('input#campo')
let botao = document.querySelector('button#botao')
let div = document.querySelector('div#res')
botao.addEventListener("click", clicar)
function clicar() {
    let res = document.createElement('p')
    res.setAttribute('Display', 'block')
    div.appendChild(res)
    res.innerHTML = input.value
    res.style.background = 'white'

    
}