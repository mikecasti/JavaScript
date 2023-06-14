console.log("CALLBACK");
console.log("Un CallBack es una función la cual es utilizada como parámetro en otra función. Estas funciones son una forma de asegurarnos de que un determinado código no se ejecuta hasta que otro código haya terminado de ejecutarse.");
console.log("Ejemplo: Las tareas que se deben ejecutar son:");
console.log("1.- Ejecutar animación Loader");
console.log("2.- Traer los productos de la Base de datos (Asíncrono).");
console.log("3.- Mostrar los productos en pantalla.");


console.log("");
console.log("Ejemplo:");
console.log("");
console.log(`console.log("1 - Ejecutando - Animación Loader");

function traeDatosBD(funcionCallBack) {
    setTimeout(() => {
        console.log("2 - Ejecutando - Obtener los productos de la Base de datos (Asíncrono).");
        funcionCallBack();
    }, 2000);
}

function imprimirProductos() {
    setTimeout(() => {
        console.log("3 - Ejecutando - Mostrar los productos en pantalla.");        
    }, 1000);
}

traeDatosBD(imprimirProductos);`);


console.log("");
console.log("");
console.log("1 - Ejecutando - Animación Loader");

function traeDatosBD(funcionCallBack) {
    setTimeout(() => {
        console.log("2 - Ejecutando - Obtener los productos de la Base de datos (Asíncrono).");
        funcionCallBack();
    }, 2000);
}

function imprimirProductos() {
    setTimeout(() => {
        console.log("3 - Ejecutando - Mostrar los productos en pantalla.");        
    }, 1000);
}

traeDatosBD(imprimirProductos);