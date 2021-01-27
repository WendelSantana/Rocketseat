/*

 *  left-hand-side-expression
 *  serve para criar um novo objeto
 * 
 */

let name = new String('Wendel')
name.surName = "Santana"
let age = new Number(19)
console.log(name.surName, age)

let date = new Date('2021-01-26')
console.log(date.__proto__)
