"use strict";

// callback(chamar de volta) function
function sayMyName(name) {
  console.log('Antes de executar a callback');
  name();
  console.log('Depois de executar a callback');
}

sayMyName(function () {
  console.log('Estou em uma callback');
});