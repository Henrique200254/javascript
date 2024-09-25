let num = [8, 6, 2, 1]
console.log(num.indexOf(8))
let pos = num.indexOf(1)
console.log(`O valor 8 está na posição ${pos}`)
pos = num.indexOf(10)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}
