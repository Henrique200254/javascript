function verificar() {
    var i = window.document.querySelector('input#idade')
    var r = window.document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    if (i.value.length == 0 || Number(i.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var s = window.document.getElementsByName('sex')
        var idade = ano - Number(i.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (s[0].checked) {
             gênero = 'Homem'
             if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.jpg')
                
             } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
             } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
             } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
             }
        } else if (s[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}