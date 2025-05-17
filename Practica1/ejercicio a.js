/*
var nombre = "Armando";
var edad = 25;

nombre = "Ana Maria";

var saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";

// Muestra en consola el contenido del saludo
*/
const nombre = "Armando";
let edad = 25;

// nombre = "Ana Maria"; // Esto causaría un error porque nombre es const
const nuevoNombre = "Ana Maria"; // Solución: crear nueva constante si necesitamos otro valor

const saludo = `Hola, ${nuevoNombre}. Tienes ${edad} años.`;

// Muestra en consola el contenido del saludo
console.log(saludo);