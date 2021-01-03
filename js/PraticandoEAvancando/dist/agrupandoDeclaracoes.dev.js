"use strict";

var age, isHumam, nome;
nome = "Wendel";
age = 19;
isHumam = true;
console.log(age, isHumam, nome); // Concatenando e Interpolando variáveis (string + number: + => concatenação)

console.log('O ' + nome + ' tem ' + age + ' anos!'); // Interpolando valores com template literals or template strings

console.log("O ".concat(nome, " tem ").concat(age, " anos!"));