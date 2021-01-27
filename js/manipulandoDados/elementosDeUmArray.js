// Manipulando Arrays

// Contar elementos de um array
//EX 1:
console .log(["a", "b", "c"].length)

//EX 2:
console.log([
    "a",
    {type:"array"},
    function() {
        return "alô"
    }
][2]()) // manipulação de dados

//EX 3:
console.log([
    "a",
    {type:"array"},
    function() {
        return "alô"
    }
][1].type) // manipulação de dados
