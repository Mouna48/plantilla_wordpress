/*
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

// Si escribimos 20 en prompt("Edad"), typeof devuelve un string
// porque prompt() siempre devuelve el dato como texto.

const nombre = prompt("Nombre:");
const edad = prompt("Edad:");
const altura = prompt("Altura en metros:");

console.log("Nombre:", typeof nombre, nombre);
console.log("Edad:", typeof edad, edad);
console.log("Altura:", typeof altura, altura);

const edadConvertida = Number(edad);
const alturaConvertida = Number(altura);

console.log("Edad convertida:", typeof edadConvertida, edadConvertida);
console.log("Altura convertida:", typeof alturaConvertida, alturaConvertida);