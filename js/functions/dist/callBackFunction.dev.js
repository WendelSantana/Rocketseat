"use strict";

// callback(chamar de volta) function
function sayMyName(nome) {
  console.log(nome);
}

sayMyName(function () {
  console.log('Estou em uma callback');
});