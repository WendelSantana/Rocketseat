// parâmetros - parameters
const sum = function(Number1, Number2) {
    total = Number1 + Number2
    return total
}

let Number1 = 2
let Number2 = 3

// sum (2, 3) argumentos - arguments

console.log(`O número 1 é ${Number1}`)
console.log(`O número 2 é ${Number2}`)
console.log(`A soma total é ${sum(Number1, Number2)}`)
console.log(total)

// outra maneira de entender funções

// Função é um liquidificador
function fazerSuco(fruta1, fruta2) {
    return 'Suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana ', 'maçã')

console.log(copo)
