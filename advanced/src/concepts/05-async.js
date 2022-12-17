import { heroes } from "../data/heroes";

/**
 *
 * @param{HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371f1efebc31def272e25";
  console.log("Inicio de componente");
  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));

  console.log("Fin del componente");
};

/**
 * @param{String} id
 * @returns {Promise<String>} retorna el nombre del heroe buscado
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `Hero wit id ${id} not found`;
  return hero.name;
};
