console.log("BUCLES");
console.log("");
console.log("FOR");
console.log("    La sintaxis es: for (variable;condición;incremento/decremento)");

console.log(`    for(let i=1;i<=10;i++) {
    console.log("{13 * " + i + "} = ", 13 * i);
    }`);

for(let i=1;i<=5;i++) {
    console.log("    {13 * " + i + "} = ", 13 * i);
}

console.log("");
console.log("ForEach - Por vcada elemento del arreglo.");

console.log(`    const LETRAS = ['Mike','Faby','Susy','Axel','Ana','Luis'];
    LETRAS.forEach((valor,indice) => {
        console.log(valor, indice);
    })`);

const LETRAS = ['Mike','Faby','Susy','Axel','Ana','Luis'];
LETRAS.forEach((valor,indice) => {
    console.log("    ",valor, indice);
})

console.log("");
console.log("FOR-OF");
console.log("Este bucle es similar al ForEach, la diferencia es que este no obtiene el índice.");

console.log(`    for(letra of LETRAS) {
         console.log(letra);
        }`); 
for(letra of LETRAS) {
    console.log("    ", letra);
}

console.log(`    const NOMBRE = "Michael"
    for(caracter of NOMBRE) {
        console.log(caracter);
    }`); 
const NOMBRE = "Michael"
for(caracter of NOMBRE) {
    console.log("    ", caracter);
}

console.log("");
console.log("FOR-IN");
console.log("Este bucle se utiliza para recorrer las LLAVES (KEYS) de un objeto.");

console.log(`    const CANCION = {
        nombre: 'Aqui todo esta bien',
        duracion: 3.02,
        añadirAFavoritos: () => {
            console.log("La canción se añadió a Favoritos");
        },
    }

    for(let key in CANCION) {
        console.log('Resultado:', key);
    }`);

const CANCION = {
    nombre: 'Aqui todo esta bien',
    duracion: 3.02,
    añadirAFavoritos: () => {
        console.log("La canción se añadió a Favoritos");
    },
}

for(let key in CANCION) {
    console.log("     Resultado: ", key);
}

console.log("");
console.log("WHILE");
console.log("Este bucle primero VALIDA y luego lo HACE");
console.log("Sitaxis: While (condición) { }");

console.log(`     var numero = 3;

     while (numero <5) {
         console.log(numero);
         numero++;
     }`);

var numero = 3;

while (numero <5) {
    console.log("     ", numero);
    numero++;
}

console.log("");
console.log("DO - WHILE");
console.log("Este bucle primero HACE y luego VALIDA");
console.log("Sitaxis: do { } while (condición)");


console.log(`     var numero = 31;

     do {
         console.log(numero);
         numero++;
     } while (numero <5)`);

var numero = 31;

do {
    console.log("     ", numero);
    numero++;
} while (numero <5)