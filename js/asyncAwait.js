console.log("ASYNC / AWAIT");
console.log("El código siempre debe estar dentro de una función.");



function conexionDB() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("2");
            resolve()
        }, 1000);
    })
}

// console.log("");
// console.log("Código Síncrono");
// function codigoSincrono() {
//     console.log("1");
//     conexionDB();
//     console.log("3");
// }

// codigoSincrono();

console.log("");
console.log("Código Asíncrono");
async function codigoSincrono() {
    console.log("1");
    await conexionDB();
    console.log("3");
}

codigoSincrono();