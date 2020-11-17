const persona = {
  name: "Alan",
  age: 25,
  getLastName: function getLastName(lastName) {
    return lastName;
  },
  getOtherLastName: (otherLastName) => otherLastName,
};

console.log("Acceder a la funcion", persona.getLastName("maranto"));

// Añadir propiedades nuevas a un objeto
persona.lastName = "Maranto";
persona.genre = "No Binario";
console.log(persona);

// Eliminar una propiedad del objeto
delete persona.name;
console.log("2", persona);
