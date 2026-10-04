/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */

// Pedimos el importe al usuario.

const valor = prompt("Introduce el importe de la compra:");

// Convertimos el texto en número.

const importe = Number(valor);

// Comprobamos si el importe es un número válido.

if (Number.isNaN(importe)) {

    console.log("Error: debes introducir un importe válido.");

} else {

    let porcentajeDescuento;

    // Menos de 50 => 0%
    if (importe < 50) {
        porcentajeDescuento = 0;

    // Desde 50  hasta menos de 100 => 5%
    } else if (importe < 100) {
        porcentajeDescuento = 5;

    // Desde 100  hasta menos de 200 => 10%
    } else if (importe < 200) {
        porcentajeDescuento = 10;

    // 200 o más => 15%
    } else {
        porcentajeDescuento = 15;
    }

    // Calculamos cuánto dinero se descuenta.

    const descuento = importe * porcentajeDescuento / 100;

    // Calculamos el precio final.

    const precioFinal = importe - descuento;

    // Mostramos los resultados.

    console.log("Importe inicial:", importe);
    console.log("Porcentaje de descuento:", porcentajeDescuento + "%");
    console.log("Descuento:", descuento );
    console.log("Precio final:", precioFinal);
}