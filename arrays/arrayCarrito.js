// Tengo un carrito de amazon
const amazonCar = [];

// Agregar elementos al carrito
const reloj = {
  url: "www.google.com",
  precio: 1406.94,
  nombre: "reloj",
  marca: "fossil",
};

const balanza = {
  url: "www.fb.com",
  precio: 852.94,
  nombre: "balanza",
  marca: "omron",
};

const pop = {
  url: "www.funko.com",
  precio: 400.0,
  nombre: "harry potter",
  marca: "funko",
};

console.log("1", amazonCar);

//Push
// Insertar un elemento al final del arreglo y
//retornar la longitud del arreglo
amazonCar.push(reloj);
console.log("2", amazonCar);

amazonCar.push(balanza);
console.log("3", amazonCar);

// Unshift
// Inserta un elemento al principio del array
amazonCar.unshift(pop);
console.log("4", amazonCar);

// Shift
// Eliminar el primer elemento del arreglo
//y lo retorna (el elemento)
amazonCar.shift();

// Eliminar el ultimo elemento
amazonCar.pop();
console.log("5", amazonCar);

// Splice
// Eliminar elementos del arreglo a partir de una posicion
const numeros = [1,2,3,4,5,6]
console.log('al principio mi arreglo es:', numeros)
numeros.splice(3,3)
console.log('despues de aplicar splice mi arreglo es:', numeros)
