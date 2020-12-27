// Scope 

/*
* O Escopo determina a visibilidade de alguma variável no JavaScript
 */

/* Block Statement( Declaração de bloco )
``` js 
*
 => Vamos iniciar um bloco
{
    * aqui dentro é um bloco e posso colocar qualquer código
} => fechamos o bloco
*/

// O bloco também criará um novo escopo. Chamamos de `block-scope`

// var é global e, também local

// Exemplo 1: Global => é todo o código da aplicação

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)


// Exemplo 2: Onde acontece o hoisting ( elevação )

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

// isso o que aconteceu... por debaixo dos panos

var x

console.log('> existe x antes do bloco? ', x)

{
    x = 0
}
