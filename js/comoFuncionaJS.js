console.log("TAREAS SINCRONAS");
console.log("Estas tareas no llevan mucho tiempo en su ejecución, por lo tanto se ejecutan una tras otra.");
console.log("El procesador estas tareas lo realiza de manera muy rápida.");
console.log("Por ejemplo: crear una variable, Operaciones Aritméticas, etc.");

console.log("");
console.log("");
console.log("TAREAS ASINCRONAS");
console.log("Estas tareas llevan algún tiempo de ejecución y muchas veces no sabemos cuando terminarán, por ello se debe esperar por una respuesta.");
console.log("Por ejemplo, Conexión a base de datos o al servidor, llamado a un servicio (API).");


// debugger

setTimeout(() => {
    console.log(2);
}, 2000)

console.log(1);

 
console.log(3);