/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 10 · Múltiplos y divisibilidad
 */

// Contamos cuántos números cumplen la condición.
let contador = 0;

for (let i = 1; i <= 100; i++) {

// Comprobamos si es múltiplo de 3 Y NO es múltiplo de 5
    if (i % 3 === 0 && i % 5 !== 0) {

        console.log(i);

        // Aumentamos el contador porque encontramo un número que cumple las dos condiciones

        contador++;
    }
}

// Mostramos cuántos números cumplen la condición.

console.log("Cantidad de números encontrados:", contador);

/*¿Qué valores toma el contador en las tres primeras iteraciones?
Iteración 1 (i = 1): Vale 0 (no se cumple la condición)
Iteración 2 (i = 2): Vale 0 (no se cumple la condición)
Iteración 3 (i = 3): Pasa a 1 (se cumple la condición)

¿Cuándo termina el bucle?
El bucle termina cuando la variable de control 'i' llega al valor 101,
       haciendo que la condición 'i <= 100' sea falsa (false).
*/