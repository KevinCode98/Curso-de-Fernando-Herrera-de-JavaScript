let a = 10;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

// console.log("Fin del programa");
const hoy = new Date();
let dia = hoy.getDay();

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes, martes o domingo...");
}

// Sin usar If Else o Switch, unicamente objetos
dias = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
};

console.log(dias[10] || "El día no es valido");
