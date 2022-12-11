/*
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias dle HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
const puntosHTML = document.querySelectorAll("small");

// Esta función crea un nuevo deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) deck.push(i + tipo);
  }

  for (let tipo of tipos) {
    for (let especial of especiales) deck.push(especial + tipo);
  }

  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay mas cartas en el deck";
  }
  let carta = deck.pop();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

const turnoComputadora = (puntosMinimos) => {
  do {
    // Suma los puntos de las cartas que tiene la computadora
    const carta = pedirCarta();
    puntosComputadora += valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    // Esto permite meter una imagen de una carta
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) break;
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosJugador === 21) alert("Ganaste! :D");
    else if (puntosComputadora === puntosJugador) alert("Nadie gana ;-;");
    else if (puntosMinimos > 21) alert("Perdiste! Gano la computadora D:");
    else if (puntosComputadora > 21) alert("Ganaste! :D");
    else alert("Perdiste! Gano la computadora D:");
  }, 30);
};

// Eventos
btnPedir.addEventListener("click", () => {
  // Suma los puntos de las cartas que tiene el jugador
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  // Esto permite meter una imagen de una carta
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  // Comprueba si el jugador se ha pasado de 21 puntos
  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    turnoComputadora(puntosJugador);
    btnDetener.disabled = true;
    btnPedir.disabled = true;
  } else {
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
  deck = [];
  deck = crearDeck();

  // Borramos los datos anteriores
  puntosJugador = 0;
  puntosComputadora = 0;
  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;
  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnDetener.disabled = false;
  btnPedir.disabled = false;
});
