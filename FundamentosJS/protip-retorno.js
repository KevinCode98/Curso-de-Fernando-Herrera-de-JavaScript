const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Kevin", "Carrillo");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  console.log({ args });
};

const imprimeArgumentos3 = (edad, ...args) => {
  console.log({ edad, args });
  return args;
};

imprimeArgumentos(10, true, false, "Fernando", "Herrera");
imprimeArgumentos2(10, true, false, "Fernando", "Herrera");
imprimeArgumentos3(24, 10, true, false, "Fernando", "Herrera");

// retorno con muchos argumentos
const [casado, vivo, nombre, saludo] = imprimeArgumentos3(
  10,
  true,
  false,
  "Kevin",
  "Carrillo"
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApelllido } = crearPersona("Yadi", "Hernandez");
console.log({ nuevoApelllido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Iroman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
