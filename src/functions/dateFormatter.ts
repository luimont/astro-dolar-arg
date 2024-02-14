
export const dateFormatter = (date: string) => {

  //const date = '2024-02-13T20:53:00.000Z';
  const formattedDate = new Date(date).toLocaleString('es-AR');

  console.log("loglog"+formattedDate); // Ejemplo de salida: "13/02/2024, 16:53:00"
  return formattedDate
}
