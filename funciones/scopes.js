// Scope Global
//Es cuando el codigo NO se encuentra dentro de ninguna funcion
// sin embargo SI se puede ejecutar

let resultado = 5 + 5;  // Var Global
sumar ()
sumar2()

function sumar () {
  console.log(resultado)
  return resultado;
}

function sumar2() {
  console.log('ejecutnado suma 2', resultado)
  return resultado
}

// Scope Local
// Toda Funcion debe de retornar un valor
sumar ()
sumar2()
function sumar () {
  const resultado = 5 + 5
  console.log('sumar localmente', resultado)
   return resultado;
}

function sumar2() {
  return resultado
}