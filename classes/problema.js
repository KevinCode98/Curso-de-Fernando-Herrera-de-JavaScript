const kev = {
  nombre: "Kevin",
  edad: 24,
  imprimir() {
    console.log(`Nombre: ${this.nombre} -> Edad: ${this.edad}`);
  },
};

const fer = {
  nombre: "Fernando",
  edad: 30,
};

// kev.imprimir();

// Ok esto se debe de crear con la palabra new
function Persona(nombre, edad) {
    console.log("Se ejecuto esta linea.");
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = () => {
        console.log(`Nombre: ${this.nombre} -> Edad: ${this.edad}`);
    };
}

const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 28);
maria.imprimir();
melissa.imprimir();
