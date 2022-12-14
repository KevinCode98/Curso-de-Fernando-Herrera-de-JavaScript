/**
 * Esta función obtiene el valor de la carta
 * @param {String} carta objeto de la carta para validar su valor
 * @returns {Number} valor de la carta en entero
 */
export const valorCarta = (carta) => {
  console.log({carta});
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
