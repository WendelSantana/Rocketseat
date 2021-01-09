"use strict"; // parâmetros - parameters

var sum = function sum(Number1, Number2) {
  total = Number1 + Number2;
  return total;
};

var Number1 = 2;
var Number2 = 3; // sum (2, 3) argumentos - arguments

console.log("O n\xFAmero 1 \xE9 ".concat(Number1));
console.log("O n\xFAmero 2 \xE9 ".concat(Number2));
console.log("A soma total \xE9 ".concat(sum(Number1, Number2)));
console.log(total); // outra maneira de entender funções
// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return 'Suco de: ' + fruta1 + fruta2;
}

var copo = fazerSuco('banana ', 'maçã');
console.log(copo);