class Singelton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    if (!!Singelton.instancia) return Singelton.instancia;
    Singelton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singelton("Ironman");
const instancia2 = new Singelton("Spiderman");
const instancia3 = new Singelton("BlackPanter");

console.log(`Nombre en la instancia1 es : ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es : ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es : ${instancia3.nombre}`);
