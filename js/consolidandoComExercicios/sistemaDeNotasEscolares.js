// Transformar notas escolares

/* Crie um algoritmo que transforme as notas do sistema
   numérico para um sistema de notas em caracteres tipo A B C
 * de 90 para cima - A
 * entre 80 - 89   - B
 * entre 70 - 79   - C
 * entre 60 - 69   - D
 * menor que 60    - E
 */

function getGrade(nota) {
    if (nota >= 90 && nota <= 100 ) {
        console.log("A")
    } else if (nota >= 80 && nota <= 89) {
        console.log("B")
    } else if (nota >= 70 && nota <= 79) {
        console.log("C")
    } else if (nota >= 60 && nota <= 69) {
        console.log("D")
    } else if (nota >= 50 && nota <= 59) {
        console.log("E")
    } else if (nota < 50 && nota >= 0) {
        console.log("F")
    }
    else {
        console.log("Nota Inválida.")
    }

    return nota
}

getGrade(101)
getGrade(-1)
getGrade(0)
getGrade(1)
getGrade(45)
getGrade(68)
getGrade(61)
getGrade(75)
getGrade(85)
getGrade(95)
