"use strict";

// Let e Const 
// ``` js
// const e let são locais e só funcionam no escopo onde foi criada
// => Let
// Exemplo 1: Quando há a variável let reservada dentro de um escopo, o resultado será o que está visível.
var y = "Não";
{
  var _y = "Sim";
  console.log('exite y antes do bloco? ', _y);
}
console.log('existe y depois do bloco? ', y); // Exemplo 2: 

var y1 = "Não";
{
  y1 = "Sim";
  console.log('exite y antes do bloco? ', y1);
}
console.log('existe y depois do bloco? ', y1); // => Const

var x = "Sim";
{
  {
    var _x = "Não";
    console.log(_x);
  }
}
console.log(x);