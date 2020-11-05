const sopaLetras = ["a", "b", "c", "d", "e", "f", "g"];

/* const [ letraA, ,letraC ] = sopaLetras;
console.log(letraA);
console.log(letraC);
 */

const [ ...copiaSopaLetras] = sopaLetras
console.log('copia', copiaSopaLetras)

// Destructuring
const [ letraA , , letraC, ...letrasRestantes] = sopaLetras
console.log(letrasRestantes)
console.log(sopaLetras)
