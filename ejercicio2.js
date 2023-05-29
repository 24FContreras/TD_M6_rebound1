//Ejercicio N°2
const mascotasJson = [
  {
    nombre: "Jake",
    mascota: "true",
    animal: "gato",
    edadHumana: "7",
  },
  {
    nombre: "Balto",
    mascota: "true",
    animal: "perro",
    edadHumana: "11",
  },
  {
    nombre: "Mandibulas",
    mascota: "false",
    animal: "tiburon",
    edadHumana: "50",
  },
];

const mascotaUno = {
  nombre: "Musi",
  mascota: "true",
  animal: "perro",
  edadHumana: "8",
};

const mascotaDos = {
  nombre: "Garita",
  mascota: "gato",
  animal: "perro",
  edadHumana: "2",
};

console.log(`Cantidad de objetos inicial: ${mascotasJson.length}
-------`);

mascotasJson.push(mascotaUno, mascotaDos);

console.log(`Cantidad de objetos final: ${mascotasJson.length}
-------`);

console.log("Json final:");
console.log(mascotasJson);
