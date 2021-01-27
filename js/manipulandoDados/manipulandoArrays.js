// Manipulando Arrays

let techs = ["html", "css", "javascript"]

// 1. Adicionar um item no fim
techs.push("node JS")
// 2. Adicionar no começo
techs.unshift("SQL")
// 3. Remover do fim
techs.pop()
// 4. Remover do começo
techs.shift()
// 5. Pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// 6.Remover 1 ou mais itens em qualquer posição do arrays
techs.splice(1, 1)
// 7. Encontrar a posição de elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(index)
