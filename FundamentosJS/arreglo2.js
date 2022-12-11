let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.table({primero, ultimo});

console.log("------------ Impresion con Foreach ---------------");
juegos.forEach((elemento, indice, arr) => {
  console.log({elemento, indice, arr});
});

console.log("------------ Agregamos un nuevo Juego 'push' ---------------");
juegos.push('F-Zero');
juegos.forEach(juego => console.log(juego));


console.log("------------ Utilizamos el unshift ---------------");
juegos.unshift('Fire Emblem');
juegos.forEach(juego => console.log(juego));

console.log("------------ Eliminamos un juego 'pop' -> Elimina el ultimo elemento ---------------");
juegos.pop();
juegos.forEach(juego => console.log(juego));

console.log("------------ Eliminamos varios juegos 'splice' -> Le Agregamos una posicion ---------------");
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log('metroid index:', metroidIndex);
