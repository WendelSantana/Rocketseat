"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Operador Condicional (Ternário)
// Dependendo da condição, nós receberemos valores diferentes
// Condição então valor 1 se não valor 2
// Condition ? value1 : vaçue2
// Exemplos
// Café da manhã top

/*let bread = false
let cheese = true

const niceBreakfast = bread || cheese ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)
*/
// Maior de 18
var age = 17;
var canDrive = age >= 18 ? "Can Drive" : "Can´t Drive";
console.log(canDrive);
console.log(_typeof(canDrive));