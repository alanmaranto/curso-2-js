// Las arrow functions es otra forma de declarar funciones con una nueva
// sintaxis y fueron introducidas en JS en su version 2016 ECMA Script 6

// Function
function sumar(num1,num2) {
    return num1, num2
}

// Arrow Function
// Return Implicito: La funcion solo retorna los argumentos
const sumarArrow = (num1, num2) => (num1, num2)

// REturn Explicito: La funcion puede retornar los argumentos y 
//definir nuevas variables o hacer logica extra
const sumarArrow2 = (num1, num2) => {
    let num3 = 3
    let resultado = num1 + num2 + num3
    return resultado
}

const sumarYMultiplicarPorDos = (num1, num2) => {
    let multiplicar = 2
    let resultado = (num1 + num2) * multiplicar
    return resultado
}

console.log(sumarYMultiplicarPorDos(3,2))