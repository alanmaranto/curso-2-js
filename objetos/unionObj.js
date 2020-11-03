const users = {
  name: "Alan",
  address: "privada siempre viva",
};

const configuracionPerfilUser = {
  isDarkMode: false,
};

// Assign
const modifiedUser = Object.assign(users, configuracionPerfilUser);
console.log(modifiedUser);

// Spread Operator
const userSpread = { ...users, ...configuracionPerfilUser };
console.log(userSpread);
