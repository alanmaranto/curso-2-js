// Arreglo nesteado
const matrix = [['name', 'alan'],['lastname', 'maranto'],['age', '25']]

// Metodo flat devuelve un arreglo plano
const flatMatrix = matrix.flat()
console.log(flatMatrix)

var alumnos = ['angie', 'franco', 'edgar', 'georgi', 'abril', 'nuevo']

const saludarEstudiantes = estudiante => {
  return console.log(`Hola ${estudiante}`)
  }

  // ForEach - Ejecuta la funcion una vez por cada elemento del arreglo 
alumnos.forEach((alumno) => saludarEstudiantes(alumno))