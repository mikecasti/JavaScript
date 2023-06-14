console.log("Promises");
console.log("Las promesas sirven para trabajar competiciones asíncronas, y se utiliza para disminuir el uso excesivo de los CallBacks.");
console.log("Una Promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.");
console.log("La promesa recibe una función Resolve y Reject");
console.log("            - La función Resolve, se utiliza cuando la promesa se resolvió correctamente.");
console.log("            - La función Reject, se utiliza cuando la promesa NO se resolvió correctamente.");
console.log("");
console.log("Ejemplo: Las tareas que se deben ejecutar son:");
console.log("1.- Ejecutar animación Loader");
console.log("2.- Traer los productos de la Base de datos (Asíncrono).");
console.log("3.- Mostrar los productos en pantalla.");
console.log("");

console.log("");
console.log("Ejemplo:");
console.log("");
console.log(`console.log("1 - Ejecutando - Animación Loader");

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("2 - Ejecutando - Obtener los productos de la Base de datos (Asíncrono).");        
        return resolve()
    }, 1000);
})

miPromesa.then(() => {
    // console.log("La promesa se resolvió de manera existosa.");
    console.log("3 - Ejecutando - Mostrar los productos en pantalla.");   
}).catch((msj)=> {
    console.log("Ocurrió un error " + msj);
});`);

console.log("");
console.log("");
console.log("1 - Ejecutando - Animación Loader");

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("2 - Ejecutando - Obtener los productos de la Base de datos (Asíncrono).");        
        return resolve()
    }, 1000);
})

miPromesa.then(() => {
    // console.log("La promesa se resolvió de manera existosa.");
    console.log("3 - Ejecutando - Mostrar los productos en pantalla.");   
}).catch((msj)=> {
    console.log("Ocurrió un error " + msj);
});
