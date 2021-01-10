// function hoisting
/*
sayMyName()

function sayMyName() {
    console.log('Wendel') // sofreu o hoisting
}
*/

sayMyName() // Não pode acessar por que não foi inicializada

let sayMyName = function() {
    console.log('Wendel')
}
