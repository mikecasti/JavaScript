console.log("STORAGE");
console.log("Son como bases de datos pequeñas, las cuales contienen la información de las preferencias del usuario.");

console.log("");
console.log("SessionStorage");
console.log("Este conserva los datos mientras el navegador está abierto y se pierde cuando el navegador se cierra.");

console.log("");
console.log("Para GUARDAR datos");
console.log(`sessionStorage.setItem("nombre", false);`);
sessionStorage.setItem('nombre', 'Mike');

console.log("");
console.log("Para RECUPERAR datos");
console.log(`const VALOR = sessionStorage.getItem("nombre");`);
const VALOR2 = sessionStorage.getItem("nombre");
console.log("El valor es ", VALOR2);

console.log("");
console.log("Para BORRAR datos");
console.log(`sessionStorage.removeItem("nombre");`);
sessionStorage.removeItem("nombre");




// console.log("");
// console.log("LocalStorage");
// console.log("Éste conserva los datos incluso cuando el navegador se cierra y se vuelve a abrir.");

// console.log("");
// console.log("Para GUARDAR datos");
// console.log(`localStorage.setItem("darkMode", false);`);
// localStorage.setItem("darkMode", false);

// console.log("");
// console.log("Para RECUPERAR datos");
// console.log(`const VALOR = localStorage.getItem("darkMode");`);
// const VALOR = localStorage.getItem("darkMode");
// console.log("El valor es ", VALOR);

// console.log("");
// console.log("Para BORRAR datos");
// console.log(`localStorage.removeItem("darkMode");`);
// localStorage.removeItem("darkMode");

