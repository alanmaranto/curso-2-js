const numeroString = "10"
const numeroFlotanteString = "10.5"
const numeroLetra = "Dos";
const stringANumero = "5"
const esEnter = 7.2

// convertir string a numero
const numeroConvertido = Number.parseInt(numeroString)

console.log(typeof(numeroString))
console.log(typeof(numeroConvertido))

// convertir string a numero float
const numeroFlotanteConvertido = Number.parseFloat(numeroFlotanteString)
console.log(numeroFlotanteConvertido)

console.log(Number.parseInt(numeroLetra))

// Convertir String a numero
console.log(stringANumero.toString())

console.log(Number.isInteger(esEnter))
