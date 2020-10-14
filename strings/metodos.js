const celular = "Huawei P20 Pro";

// Longitud de string
console.log(celular.length);

// Saber si una letra o palabra existe
console.log(celular.includes("Pro"));

// A minuscula
console.log(celular.toLowerCase());

// A mayuscula
console.log(celular.toUpperCase());

// Reemplazar
console.log(celular.replace("Huawei", "Samsung"));

// Slice - Extraer una parte de tu string
console.log("slice", celular.slice(7, 10));

// Substring
console.log("substring", celular.substring(0, 7));

// Extrae una letra del string por posicion
console.log(celular.charAt(0));

const nombre = "Alan";
const apellido = "maranto";
console.log(nombre);

// trim eliminar todos los espacios en blanco
console.log(nombre.trim());

// eliminar espacios en blanco al principio del string
console.log(nombre.trimStart());

// eliminar espacios en blanco al final
console.log(nombre.trimEnd());

// eliminar todos los espacios
console.log(nombre.trimStart().trimEnd());

// concatenar variables string
console.log(nombre.trimStart().trimEnd().concat(apellido));

// concatenar variable con string
// js antiguo
console.log(nombre + " su segundo apellido es " + apellido);

// template string o template literals
console.log(`Su nombre es ${nombre} y su apellido es ${apellido}`);
