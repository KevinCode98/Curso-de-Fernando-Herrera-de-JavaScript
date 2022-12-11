const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse()); // true
console.log("=========================");

console.warn("And");
console.log(true && false); // false
console.log(true && !false); // false
console.log(!regresaFalse() && regresaTrue());
console.log("4 condiciones", true && true && true && false);
console.log("=========================");

console.warn("Or");
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());
console.log("4 condiciones", true || true || true || false);
console.log("=========================");

// Asignaciones4
console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && "Hola Mundo" && 150;
const a2 = "Hola" && "Mundo" && soyFalso;
const a3 = soyFalso || "Ya no soy falso";
const a4 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso de nuevo" ||
  true;
console.table({ a1, a2, a3, a4 });

if (true || true || true || false) {
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}
