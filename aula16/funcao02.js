/*function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,5))
console.log(soma(2))*/

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2,5))
console.log(soma(2))

//coloquei os parametros formais para valerem 0 caso o parametro real não seja definido, por isso, o valor final foi 2, que foi o único informado no parametro real. então 2 + 0 = 2
// Se não tivesse feito isso, o resultado seria NAN, porque o n2 seria Undefined.

