function carregar() {
    var h = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    h.innerHTML = `Agora são ${hora} horas.`
   
    if (hora > 5 && hora < 12) {
        document.body.style.background = '#D9A93B'
        img.src = 'imagens/pexels-manhã.jpg'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#D9663B'
        img.src = 'imagens/pexels-tarde.jpg'
        img.alt = 'tarde'
    } else {
        document.body.style.background = '#050E2B'
        img.src = 'imagens/pexels-noite.jpg'
        img.alt = 'noite'
    }


}