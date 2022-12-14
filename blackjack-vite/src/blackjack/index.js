import {
  crearDeck,
  pedirCarta,
  turnoComputadora,
  aculumarPuntos,
  crearCarta,
} from "./usecases";

const miModulo = (() => {
  "use strict";

  let puntosJugadores = [],
    deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  // Referencias dle HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  // Iniciar el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) puntosJugadores.push(0);
    puntosHTML.forEach((elemento) => (elemento.innerText = 0));
    divCartasJugadores.forEach((elemento) => (elemento.innerHTML = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    // Suma los puntos de las cartas que tiene el jugador
    const carta = pedirCarta(deck);
    const puntosJugador = aculumarPuntos(puntosJugadores, puntosHTML, carta, 0);
    crearCarta(divCartasJugadores, carta, 0);

    // Comprueba si el jugador se ha pasado de 21 puntos
    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(divCartasJugadores, puntosJugadores, puntosHTML, deck);
    } else if (puntosJugador === 21) {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(divCartasJugadores, puntosJugadores, puntosHTML, deck);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(divCartasJugadores, puntosJugadores, puntosHTML, deck);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
