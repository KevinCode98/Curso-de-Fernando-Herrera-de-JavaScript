import { valorCarta } from "./valor-carta";

/**
 * @param {Array<Number>} puntosJugadores Puntos obtenidos por todos los jugadores en un Arreglo
 * @param {String} carta objeto de la carta para acomular el valor de las cartas
 * @param {Number} turno Numero del jugador para saber en que posicion de puntaje se encuentra
 * @returns valor del puntaje del jugador
 */

// Turno 0 => primer jugador y el ultimo sera la computadora
export const aculumarPuntos = (puntosJugadores, puntosHTML, carta, turno) => {
    console.log({carta});
  // Suma los puntos de las cartas que tiene la computadora
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
