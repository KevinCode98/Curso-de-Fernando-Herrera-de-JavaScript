import { determinarGanador, pedirCarta, aculumarPuntos, crearCarta } from "./";

/**
 * Petnute jugar a la computadora automaticamente para ganar a los jugadores
 * @param {Array<Number>} puntosJugadores Puntos obtenidos por todos los jugadores en un Arreglo
 * @param {Array<String>} deck Arreglo de cartas
 */
export const turnoComputadora = (divCartasJugadores, puntosJugadores, puntosHTML, deck) => {
  let puntosComputadora = 0,
    puntosMinimos = puntosJugadores[0];
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = aculumarPuntos(
      puntosJugadores,
      puntosHTML,
      carta,
      puntosJugadores.length -1
    );
    crearCarta(divCartasJugadores, carta, puntosJugadores.length - 1);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
