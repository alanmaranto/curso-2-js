// Funciones
/* Es una serie de pasos / procedimientos / instrucciones que realizan una accion, su 
    ventaja es que son reutilizables
*/

// En js 2 formas de crear funciones
// 1. Declaracion de funcion
function sumar() {
  console.log(1 + 1);
  return 1 + 1;
}

// Llamar la funcion
sumar();

const suma = sumar();
console.log("este es el resultado de la funcion suma:", suma);
console.log(typeof suma);

// 2. Expresión de funcion
const restar = function () {
  console.log(1 - 1);
};

// Llamar la funcion
restar();
