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

// Agreagar con spread el reloj
let newCarrito = [...amazonCar, reloj]
console.log(amazonCar)
console.log('1',newCarrito)

// Agregar la balanza al new array (new carrito)
newCarrito = [...newCarrito, balanza]
console.log('2',newCarrito)

// Añadir el pop al principio
newCarrito = [pop, ...newCarrito]
console.log('3', newCarrito)