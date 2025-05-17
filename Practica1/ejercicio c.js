/* Crea una arrow function llamada saludoPersonalizado que reciba dos
parametros: nombre y edad, y retorne una cadena como la siguiente */

// "Hola, me llamo Isay y tengo 37 años"
const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años`;

// Ejemplo de uso:
console.log(saludoPersonalizado("Isay", 37));  // "Hola, me llamo Isay y tengo 37 años"
console.log(saludoPersonalizado("Luis", 22));   // "Hola, me llamo Luis y tengo 22 años"
console.log(saludoPersonalizado("Valeria", 22)); // "Hola, me llamo Valeria y tengo 22 años"