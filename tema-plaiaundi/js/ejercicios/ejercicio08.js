/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 8 · Clasificación de una nota
 */


// Pedimos la nota al usuario.
const valor = prompt("Introduce tu nota (0-10):");

// Convertimos el valor a número.

const nota = Number(valor);

// Comprobamos si es un número válido
// y si está dentro del intervalo permitido.

if (Number.isNaN(nota) || nota < 0 || nota > 10) {

    console.log("Error: introduce una nota válida entre 0 y 10.");

} else if (nota < 5) {

    console.log("Suspenso");

} else if (nota < 7) {

    console.log("Aprobado");

} else if (nota < 9) {

    console.log("Notable");

} else {

    console.log("Sobresaliente");
}


/* ¿Qué sucedería si comprobáramos nota >= 5
 * antes que nota >= 9?

 * El problema es que una nota de 9 también cumple nota >= 5.
 * Por eso JavaScript entraría en el primer if y mostraría
 * "Aprobado", sin llegar a comprobar nota >= 9.
 *
 * Por eso las condiciones más específicas o altas deben
 * comprobarse antes cuando pueden quedar incluidas
 * dentro de una condición más general.
 */