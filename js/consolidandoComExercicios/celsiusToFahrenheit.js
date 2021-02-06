/* Celsius em Fahrenheit
  
 *  Crie uma função que receba uma string em celsius ou fahrenheit
 *  e faça a transformação de uma unidade para a outra.  

 *  C = (F − 32) ÷ 1.8
 *  F = (C * 1.8) + 32
 
 * console.log(((10-32) / 1.8).toFixed(2))
 */

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado")
    }

    //fluxo ideal = F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let degreeSign = '°C'

    //fluxo alternativo = C -> F
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 1.8 + 32
        degreeSign = '°F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('50C'))
    console.log(transformDegree('50F'))
    // transformDegree('50R')
}
catch (error) {
    console.log(error.message)
}
