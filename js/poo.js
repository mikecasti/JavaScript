console.log("PROGRAMACIÓN ORIENTADA A OBJETOS");

console.log("Abstracción");
console.log("Es cuando tienes algo muy grande y se lo divide en pequeños pedazos.");
console.log("¿Qué es un Objeto en Programación?");
console.log("Es una representación de cualquier cosa en la vida real.");
console.log("Los Objetos en JS se crean mediante las llaves {} y se establece la Clave - Valor");

const CANCION = {
    nombre: 'Aqui todo esta bien',
    duracion: 3.02,
    añadirAFavoritos: () => {
        console.log("La canción se añadió a Favoritos");
    },
}

console.log("");
console.log("Notación Punto: CANCION.nombre");
console.log("La canción es: ", CANCION.nombre);

console.log("");
console.log("Notación Corchete: CANCION['nombre']");
console.log("La canción es: ", CANCION['nombre']);

console.log("");
console.log("Cambiar el valor de una propiedad");
console.log("CANCION.nombre = 'Thinking Out Loud';");
CANCION.nombre = 'Thinking Out Loud';
console.log(CANCION);

console.log("");
console.log("Agregar una propiedad");
console.log("CANCION.autor = 'Ed Shream';");
CANCION.autor = 'Ed Shream';
console.log(CANCION);

console.log("");
console.log("Eliminar una propiedad");
console.log("CANCION.autor = 'Ed Shream';");
delete CANCION.duracion;
console.log(CANCION);

console.log("");
console.log("Este Objeto es Literal");
console.log("Son Objetos Literales cuando las propiedades están declaradas textualmente en el código.");
console.log(`const CANCION = {
    nombre: 'Aqui todo esta bien',
    duracion: 3.02,
    añadirAFavoritos: () => {
        console.log("La canción se añadió a Favoritos");
    },
}`);

const CANCION1 = {
    nombre: 'Aqui todo esta bien',
    duracion: 3.02,
    añadirAFavoritos: () => {
        console.log("La canción se añadió a Favoritos");
    },
}

const CANCION2 = {
    nombre: 'La de 10',
    duracion: 4.47,
    añadirAFavoritos: () => {
        console.log("La canción se añadió a Favoritos");
    },
}


console.log(CANCION1);
console.log(CANCION2);

