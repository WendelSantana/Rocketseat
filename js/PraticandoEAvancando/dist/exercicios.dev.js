"use strict";

/*  1. Declare uma variável de nome weight
let weight
   2. Que tipo de dado é a variável acima?
console.log(typeof weight) // => undefined
*/

/* 3. Declare uma variável e atribua valores para cada um dos dados?
    * name: String
    * age: Number (integer)
    * stars: NUmber (float)
    * isSubscribe: Boolean 
*/
var name = "Mayk";
var age = 23;
var stars = 4.8;
var isSubscribe = true;
/* 4. A variável student abaixo é de qual tipo de dado?

      4.1 Atribua a ela as mesmas propriedades e valores fo exercícios 3.

      4.2 Mostre no console a seguinte mensagem:
      <name> de idade <age> pesa <weight> kg.
      
*/

var student = {
  name: "Wendel",
  age: 19,
  weight: 70.0,
  isSubscribe: true
}; // console.log(`O ${student.name} de ${student.age} anos pesa ${student.weight}.`)
//  5. Declare uma variável do tipo Array, de nome student e atribua a ela nenhum valor, ou seja, somente o Array vazio.

var students = []; //  6. Retribua um valor para a variável acima, colocando dentro o objeto student da questão 4. (Não copiar e colar o objeto criado e inserir ele no Array)

students = [student];
console.log(student[0]); //  7. Coloque no console o valor da posição zero do Array acima

console.log(student.name); //  8. Crie um novo student r coloque na posição 1 do Array students

var Jonh = {
  name: "Jonh",
  age: 23,
  weight: 70.0,
  isSubscribe: true
};
students = [student, Jonh];
console.log(students);
/*or*/

students[1] = Jonh;
console.log(students); //  9. Sem rodar código, responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

console.log(a);
var a = 1;
/* 
    Resp: undefined
    var a
    console.log(a)
    a = 1
*/