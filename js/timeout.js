console.log("TEMPORALIZADORES - TIMEOUT");
console.log("Los temporalizadores lo que hacen es ejecutar código después de cierto tiempo.");
console.log("Se tiene 2 tipos de temporalizadores: setTimeout y setInterval, a los 2 se pasa la función a ejecutar y los milisegundos.");
console.log("");
console.log("DIEFERENCIA ENTRE setTimeout y setInterval");
console.log("setTimeout => Se ejecuta el código sólo una vez después de que pasa los milisegundos.");
console.log("setInterval => Ejecuta el código cada vez que pasan los milisegundos.");
console.log("               Para para este intervalo, se usa la sintaxis: clearInterval([intervalo]) .");

console.log("");
console.log("ELEMPLO setTimeout");

console.log(`setTimeout(() => {
    console.log("Ha pasado 1 segundo con setTimeout");
},1000);`);
setTimeout(() => {
    console.log("Ha pasado 1 segundo con setTimeout");
},1000);

console.log("");
console.log("ELEMPLO setIntervalg");

console.log(`let count = 1;
const CVE = setInterval(()=> {
    if (count <= 6) {
        console.log("Han pasado "+ count +" segundos con setInterval");
        count++;
    } else {
        clearInterval(CVE);
    }
}, 1000);`);

let count = 1;
const CVE = setInterval(()=> {
    if (count <= 6) {
        console.log("Han pasado "+ count +" segundos con setInterval");
        count++;
    } else {
        clearInterval(CVE);
    }
}, 1000);

