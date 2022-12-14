export const crearCarta = (divCartasJugadores, carta, turno) => {
  // Esto permite meter una imagen de una carta
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
