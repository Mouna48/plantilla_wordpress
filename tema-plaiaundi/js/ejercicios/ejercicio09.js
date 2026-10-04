/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 9 · Menú con switch
 */


// Pedimos una opción al usuario.

const opcion = prompt(
    "Elige una opción:\nA - Alta\nB - Baja\nC - Consultar\nS - Salir"
);

// Convertimos la opción a mayúsculas

const opcionMayuscula = opcion.toUpperCase();

switch (opcionMayuscula) {

    case "A":
        console.log("Has elegido Alta.");
        break;

    case "B":
        console.log("Has elegido Baja.");
        break;

    case "C":
        console.log("Has elegido Consultar.");
        break;

    case "S":
        console.log("Has elegido Salir.");
        break;

    default:
        console.log("Opción no válida.");
}


/* ¿Qué pasaría si quitamos un break?
 *
 * JavaScript continuaría ejecutando los siguientes case,
 * aunque sus condiciones no coincidan.
 */