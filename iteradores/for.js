// Iterador es una funcion que se ejecuta repetitivamente por cada elemento a iterar

// Loop for - Ejecutar codigo repetitivamente hasta que el codigo deja de cumplir
// una determinada condicion

// 1 Inicializar For
// 2 Implementar la condición
// 3 Incrementar mi variable condicionante

for (let i = 0; i <= 10; i++) {
  console.log(`Numero: ${i}`);
}

var estudiantes = ["angie", "franco", "edgar", "georgi", "abril", "nuevo"];
console.log(estudiantes.length);
const saludarEstudiantes = (estudiante) => {
  return console.log(`Hola ${estudiante}`);
};

for (let i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
