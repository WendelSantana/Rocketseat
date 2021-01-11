// callback(chamar de volta) function

function sayMyName(nome) {
    console.log(nome)
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)
