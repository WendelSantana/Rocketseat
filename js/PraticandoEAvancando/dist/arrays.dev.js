"use strict";

// Array
var Animals = ['Lion', 'Monkey', 'Cat'];
console.log(Animals[1]); // Também é possível mesclar tipos de dados

var Animals2 = ['Lions', 'Monkeys', {
  name: 'Cat',
  age: 3
}];
console.log(Animals2[2].name); //console.log(Animals2[2].name, Animals[2].age)