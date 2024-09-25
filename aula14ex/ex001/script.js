function contar() {
    let ini = window.document.querySelector('input#inicio')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro]')
        res.innerHTML = `Impossivel contar!`
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = `Contando: `
        if (i < f) {
          for (let c = i;c <= f; c = c + p ){
            res.innerHTML += `${c} 👉`
            // contagem crescente
        }
          
      } else {
          for (let c = i; c >= f; c = c - p) {
              res.innerHTML += `${c} 👉`
              //contagem decrescente
          }
      } 
        
            
    } 

    }
    

