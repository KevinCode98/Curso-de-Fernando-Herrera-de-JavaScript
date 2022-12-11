const miModulo = (() => {
  "use strict";

  let deck = [],
    puntosJugadores = [];
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
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) puntosJugadores.push(0);
    puntosHTML.forEach((elemento) => (elemento.innerText = 0));
    divCartasJugadores.forEach((elemento) => (elemento.innerHTML = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Esta función crea un nuevo deck
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) deck.push(i + tipo);
    }

    for (let tipo of tipos) {
      for (let especial of especiales) deck.push(especial + tipo);
    }

    return _.shuffle(deck);
  };

  // Esta función me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) throw "No hay mas cartas en el deck";
    return deck.pop();
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // Turno 0 => primer jugador y el ultimo sera la computadora
  const aculumarPuntos = (carta, turno) => {
    // Suma los puntos de las cartas que tiene la computadora
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    // Esto permite meter una imagen de una carta
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
    console.log({ divCartasJugadores });
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) alert("Nadie gana ;-;");
      else if (puntosMinimos > 21) alert("Perdiste! Gano la computadora D:");
      else if (puntosComputadora > 21) alert("Ganaste! :D");
      else alert("Perdiste! Gano la computadora D:");
    }, 100);
  };

  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = aculumarPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    // Suma los puntos de las cartas que tiene el jugador
    const carta = pedirCarta();
    const puntosJugador = aculumarPuntos(carta, 0);
    crearCarta(carta, 0);

    // Comprueba si el jugador se ha pasado de 21 puntos
    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
