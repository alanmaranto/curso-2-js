// Esta SI se ejecuta
sumar();
function sumar() {
  console.log(1+1)
}

// Esta falla
resta();
const resta = function() {
  console.log(1-1)
}

/* En JS el hoisting son las dos etapas (creacion y ejecucion)  
    Creacion - Reconoce las variables, las funciones etc
    Ejecucion - Ejecuta todo lo que previamente fue creado
*/

// Explicacion de porque falla
const resta2; // Variable
resta2(); // undefined
resta2 = function() {
  console.log(5-5) /* Reasignas una funcion a una variable que js la toma como undefined */
}