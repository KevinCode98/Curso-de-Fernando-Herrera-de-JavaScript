let a = 10;
let b = a;

a = 30;

console.log({ a, b });

let juan = { nombre: "Juan" };
// el (...juan) permite copiar los valores de un objeto sin solamente asignar
// la direccion de memoria
let ana = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana });

const cambiaNombre = (...persona) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arreglos -> Operador spread
const frutas = ["Manzana", "Pera", "Pina"];

console.time("slice");
const otrasFrutasSlice = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutasSpread = [...frutas];
console.timeEnd("spread");
otrasFrutasSpread.push("Mango");

console.table({ otrasFrutasSlice, otrasFrutasSpread });
