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

class Heroe extends Persona {
  constructor(nombre, codigo, frase, clan = "Los Avengers") {
    super(nombre, codigo, frase);
    this.clan = clan;
  }

  quiensoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quiensoy();
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino Spiderman"
);

spiderman.quiensoy();
