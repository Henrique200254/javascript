function tabuada() {
    let num = window.document.querySelector('input#numero')
    let tab = window.document.querySelector('input#seltab')
    if (num.value.length == 0) {
        window.alert('ERRO!')
    } else {
        let n1 = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}