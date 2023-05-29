//Ejercicio N°1
const variableUno = "esta es la primera variable";
const variableDos = "esta es la segunda variable";

const cargarPartidos = async () => {
  try {
    const URL = "https://statsapi.web.nhl.com/api/v1/schedule";
    const res = await fetch(URL);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const mostrarRespuesta = async (callback) => {
  const datos = await callback();
  console.log(datos);
};

//ESPERABLE
//1. console.log de la variable 1
//2. console.log de la variable 2
//3. console.log de la data obtenida
console.log(variableUno);
mostrarRespuesta(cargarPartidos);
console.log(variableDos);
