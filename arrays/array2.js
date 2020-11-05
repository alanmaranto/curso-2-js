const days = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  
  // Saber cuantos elementos contiene el arreglo
  const daysCounted = days.length
  
  console.log(daysCounted)

  // Los arrays y objets si se pueden alterar aunque tengan la palabra const
  days[7] = 'Dia Cero'
  console.log(days)