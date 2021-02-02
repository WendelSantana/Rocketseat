"use strict";

// switch

/*let expression = 'a'

switch (expression) {
    case 'a':
        // código
        console.log('a')
        break
    case 'b':
        // código para expression b
        console.log('b')
        break;
    default:
    console.log('default')
        break;
}
*/
// Calculadora
function calculate(number1, operator, number2) {
  var result;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = number1 - number2;
      break;

    case '*':
      result = number1 * number2;
      break;

    case '/':
      result = number1 / number2;
      break;

    default:
      console.log('Não implementado...');
      break;
  }

  return result;
}

console.log(calculate(5, '+', 10));