"use strict";

/*

 *  left-hand-side-expression
 *  serve para criar um novo objeto
 * 
 */
var name = new String('Wendel');
name.surName = "Santana";
var age = new Number(19);
console.log(name.surName, age);
var date = new Date('2021-01-26');
console.log(date.__proto__);