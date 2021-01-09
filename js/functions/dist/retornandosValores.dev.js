// parâmetros - parameters
var sum = function sum(Number1, Number2) {
  total = Number1 + Number2;
  return total;
};

var Number1 = 2;
var Number2 = 3; // sum (2, 3) argumentos - arguments

console.log(`O número 1 é ${Number1}`)
console.log(`O número 1 é ${Number2}`)
console.log(`O número 1 é ${sum(Number1, Number2)}`)

// outra maneira de entender funções
// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return 'Suco de: ' + fruta1 + fruta2;
}

var copo = fazerSuco('banana ', 'maçã');
console.log(copo);