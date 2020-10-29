// Operador OR
// Revisa que se cumpla al menos una condición
let debito = 200;
let credito = 200;
let miDinero = debito + credito;
let totalCompras = 400;

if (debito > totalCompras || credito > totalCompras) {
  console.log("Pago aceptado con debito o credito");
} else if (miDinero >= totalCompras) {
  console.log("Puedes pagar con ambas tarjetas");
} else {
  console.log("No tienes dinero suficiente");
}
