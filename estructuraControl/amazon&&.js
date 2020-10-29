// && And
// Verifica todas las condicioens se cumplan (true)
const isLogged = true;
const creditCard = true;

// IF
if (isLogged && creditCard) {
  console.log("El pago se realizó exitosamente");
} else {
  console.log("Ha ocurrido un error");
}

// IF Ternario
isLogged && creditCard
  ? console.log("El pago se realizo")
  : console.log("Hubo en error");
º
if (isLogged && creditCard) {
  console.log("El pago se realizó exitosamente");
} else if (!isLogged) {
  console.log("Inicia sesion para comprar");
} else if (!creditCard) {
  console.log("Fondos insuficientes");
} else {
  console.log("Hubo un error con tu pago");
}
