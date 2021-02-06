// Sistema de gastos familiar

/* Crie um objeto que possuirá 2 propriedades, ambas 
   array: 
 *  receitas: []
 *  despesas: []
 *  
   Agora, crie uma função que irá calcular o total de receitas 
   e despesas e mostrar uma mensagem se a família está com o saldo
   positivo ou negativo, seguido do valor do saldo.
 */

let familia = {
    receitas: [5000, 3210, 1200],
    despesas: [88.8, 50.0, 100.22, 500, 310]
}

function soma(array) {
    let total = 0;

    for(let value of array) {
      total += value
    }
    
    return total
}

function calculoDeBalanco() {
  const calculoDeReceitas = soma(familia.receitas)
  const calculoDeDespesas = soma(familia.despesas)

  const total = calculoDeReceitas - calculoDeDespesas

  const itsOk = total >= 0

  let textoBalanco = "'negativo'"

  if(itsOk) {
      textoBalanco = "'positivo'"
  }

  console.log(`Seu saldo é ${textoBalanco} de ${total}R$.`)

}

calculoDeBalanco()
