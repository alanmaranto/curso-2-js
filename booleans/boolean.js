const booleanTrue = true;
const boolenaFalse = false;

console.log(typeof booleanTrue);

if (booleanTrue) {
  console.log("es true");
} else {
  console.log("es falso");
}

if (10 < 5) {
  console.log("Si, es mayor");
} else {
  console.log("No, no es menor");
}

/* if (booleanTrue === true) {
  console.log('es true')
} else {
  console.log('es falso')
}
 */
 // Ecmascript 6
console.log(booleanTrue ? 'es true simplificado' : 'es falso')
console.log((10 < 5) ? 'es menor' : 'es mayor')
