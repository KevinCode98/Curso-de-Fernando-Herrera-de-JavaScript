/**
 *  Días de semana abrimos a las 11
 *  pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1; //
const horaActual = 11;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
horaApertura = [0, 6].includes(dia) ? 9 : 11;

mensaje =
  horaActual >= horaApertura
    ? "Está abierto"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
