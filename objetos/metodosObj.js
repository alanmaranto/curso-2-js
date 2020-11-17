const persona = {
    name: "Alan",
    age: 25,
    lastName: 'maranto',
    email: 'alanmaranto@gmail.com'
  };
  
  // Object keys devuelve un arreglo con las propiedades del objeto
  const arrayFromPropertyObject = Object.keys(persona)
  console.log(arrayFromPropertyObject)
  
  // Object values devuelve un arreglo con los valores del objeto
  const arrayFromValuesObject = Object.values(persona)
  console.log(arrayFromValuesObject)
  
  // OBject entries devuelve un arreglo de arreglos con su correspondiente llave-valor [key,value]
  const arrayFromObject = Object.entries(persona)
  console.log(arrayFromObject)