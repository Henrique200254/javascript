function go(){
    if(document.querySelector('input#txtn').value.length == 0){
        alert('Por favor, insira um número')
    }else{
        document.querySelector('select#seltab').innerHTML = ``
        var n = Number(document.querySelector('input#txtn').value)
        for(let c = 1;c <= 10;c++){
            let mult = document.createElement('option')
            mult.text = `${n} * ${c} = ${n*c}`
            mult.value = `tab${c}`
            document.querySelector('select#seltab').appendChild(mult)
        }
    }
}