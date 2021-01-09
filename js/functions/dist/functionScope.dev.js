"use strict";

// function scope
function soma() {
  var n1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return n1 + n2;
}

console.log(soma(2));