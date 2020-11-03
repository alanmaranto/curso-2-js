const frutas = {
  apple: 10,
};
const verduras = {
  onion: 1,
};
console.log(frutas);
console.log(verduras);

// Object Methods -- Freeze
// Prevenir la modificación de un objeto
Object.freeze(frutas);
console.log("nuevo", frutas);
frutas.apple = 5;
console.log(frutas);

// Seal
Object.seal(verduras);

// Modificar valor de la onion
verduras.onion = 5;
delete verduras.onion;
console.log(verduras);
