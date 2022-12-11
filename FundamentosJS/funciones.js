function saludar(nombre) {
  console.log("Hola", nombre);
}

const saludar2 = function (nombre) {
  console.log("como estas?,", nombre);
};

function saludar3(nombre) {
  console.log(arguments);
  console.log("Hola", nombre);
}

saludar("Kevin");
saludar2("Fernando");
saludar3("Luis", 40, true, "Costa Rica");

// Funciones flecha
const saludarFlecha = () => {
  console.log("Hola flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola", nombre);
};

saludarFlecha();
saludarFlecha2("flecha Kevin");


// Funciones con retorno
function sumar(a, b){
  return a + b;
}

console.log(sumar(1,2));

const sumar2 = (a,b) => a + b;
console.log(sumar2(5,5));

const getAleatorio = () => Math.round(Math.random() * 10) + 1;
console.log(getAleatorio());

