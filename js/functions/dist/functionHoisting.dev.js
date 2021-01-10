"use strict";

// function hoisting

/*
sayMyName()

function sayMyName() {
    console.log('Wendel') // sofreu o hoisting
}
*/
sayMyName(); // Não pode acessar por que não foi inicializada

var sayMyName = function sayMyName() {
  console.log('Wendel');
};