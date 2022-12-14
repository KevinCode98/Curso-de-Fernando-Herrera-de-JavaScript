/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck Arreglo necesario para obtener una carta
 * @returns {String} Toma una carta del Deck
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) throw "No hay mas cartas en el deck";
  return deck.pop();
};
