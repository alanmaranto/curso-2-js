// Objeto Literal
const perro = {
  raza: "chihuahua",
  genero: "hembra",
  tamano: "grande",
  edad: 50,
};

// Acceder a una propiedad de un objeto
const edad = perro.edad;
console.log("accedi a la edad", edad);
console.log("accedi a la raza", perro.raza);
console.log(perro.genero);

// Otra forma para acceder a las propiedades de un objeto (rara)
console.log(perro["tamano"]);
console.log(perro["raza"]);

// Objetos anidados or nested
const superheroe = {
  batman: {
    dinero: true,
    nombre: "bruce wayne",
    poder: null,
  },
  spiderman: {
    sentido: true,
    dinero: false,
    nombre: "peter parker",
    poder: "arana",
  },
  superman: {
    vuela: true,
    nombre: "clark kent",
  },
};

console.log(superheroe);

// Validar que una propiedad exista
const isName =
  superheroe && superheroe.superman.nombre ? superheroe.superman.nombre : null;
console.log("isName", isName);

// Validacion con optional chaining
const isName2020 = superheroe?.superman?.nombre;
console.log("2020", isName2020);
