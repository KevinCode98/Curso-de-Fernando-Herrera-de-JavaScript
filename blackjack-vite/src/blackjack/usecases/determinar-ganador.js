/**
 * 
 * @param {Array[Number]} puntosJugadores Puntos obtenidos por todos los jugadores en un Arreglo
 */
export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) alert("Nadie gana ;-;");
    else if (puntosMinimos > 21) alert("Perdiste! Gano la computadora D:");
    else if (puntosComputadora > 21) alert("Ganaste! :D");
    else alert("Perdiste! Gano la computadora D:");
  }, 200);
};
