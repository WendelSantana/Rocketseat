// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // o split troca o que for colocado como argumento
let phraseWithUnderScore = myArray.join("_") // o join vai juntar o for colocado como argumento
console.log(phraseWithUnderScore.toUpperCase())
