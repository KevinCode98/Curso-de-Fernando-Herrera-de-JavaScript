class Persona {
  static _conteo = 0;
  static get coneto() {
    return this._conteo + " instancias";
  }
  static mensaje() {
    console.log("Hola a todos, soy un metodo static");
  }

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase",
    comida = "Sin comida"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    this.comida = comida;
    Persona._conteo++;
  }

  get ComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }
  set ComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  quiensoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quiensoy();
    console.log(`${this.codigo} -> Dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino Spiderman"
);
const iroman = new Persona("Tony Stark", "Ironman", "Yo soy Ironman");

spiderman.miFrase();
iroman.miFrase();

spiderman.ComidaFavorita = "El pie de cereza de la tia May";
console.log(spiderman.ComidaFavorita);
console.log(Persona.coneto);
Persona.mensaje();

Persona.propiedadExterna = "Hola mundo!";
console.log(Persona.propiedadExterna);
console.log({ Persona });
