const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.log("===== FOR TRADICIONAL =====");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.log("\n===== FOR IN =====");
for (let i in heroes) {
    console.log(heroes[i]);
}

console.log("\n===== FOR OF =====");
for(let i of heroes){
    console.log(i);
}