"use strict";

/*
  Function() Construtor
  
  * expressão new
  * criar novo objeto
  * this keyword

 */
function Person(name) {
  this.name = name;

  this.walk = function () {
    return this.name + " está andando";
  };
}

var Wendel = new Person("Wendel");
var João = new Person("João");
console.log(Wendel.walk());
console.log(João.walk());