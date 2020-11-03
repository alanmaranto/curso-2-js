// Object Destructuring
// Object Nested
const superhero = {
  batman: {
    name: "bruce",
  },
  superman: {
    name: "superman",
  },
  hulk: {
    name: "bruce banner",
  },
};

/* const { hulk } = superhero
  const { name } = hulk */

// Destructuring nested
const {
  batman: { name, power },
} = superhero;
console.log("nombre de batman", name);
console.log("el poder es: ", power);
