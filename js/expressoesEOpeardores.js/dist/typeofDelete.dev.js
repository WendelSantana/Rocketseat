"use strict";

/*
    Operadores unários
    typeof
    delete
*/
var person = {
  name: 'Wendel',
  age: 19
};
delete person.age; // vai deletar o que está dentro do objeto

console.log(person);