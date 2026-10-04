/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 7 · Truthy y falsy
 */

// Valores falsy:
// 0, "", null, undefined, NaN, false

// Valores truthy:
// 1, -1, "hola", "0", etc.

// Comprobamos algunos valores.

console.log("0:", Boolean(0));
console.log("1:", Boolean(1));
console.log("-1:", Boolean(-1));
console.log('"":', Boolean(""));
console.log('"hola":', Boolean("hola"));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN:", Boolean(NaN));
console.log('"0":', Boolean("0"));

// Pedimos el nombre al usuario.

const nombre = prompt("Introduce tu nombre:");


// Si nombre es truthy, significa que se ha introducido algún texto.

if (nombre) {
    console.log("Nombre recibido:", nombre);

} else {
    console.log("No se ha introducido nombre");
}


/*
 * ¿Por qué "0" y 0 son diferentes?
 *
 * 0 es un número y es falsy.
 *
 * "0" es un texto (string).
 * Aunque contiene el carácter 0, no es un string vacío,
 * por lo que es truthy.
 */