// throw = lançar

// try... catch

function sayMyName(nome = '') {
    if ( nome === '' ) {
        throw ('Nome é obrigatório.')
    }

    console.log(nome)

}

// try = lançar 
// catch = lançar

try {
    sayMyName()
} catch (e) {
    console.log(e)
}

console.log('Após o try catch!')

// Esse fluxo padrão é importante para pegar erros e perceber falhas na aplicação.
