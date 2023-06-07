console.log("CLASES");
console.log("En las clases los Prototypes se los realiza mediante las funciones establecidas.");

console.log(`class Cancion {

    constructor(nombre, duracion) {
        this.nombre = nombre
        this.duracion = duracion
    }

    añadirAFavoritos() {
        console.log("La canción se añadió a Favoritos");
    }
}`);

class Cancion {

    constructor(nombre, duracion) {
        this.nombre = nombre
        this.duracion = duracion
    }

    añadirAFavoritos() {
        console.log("La canción se añadió a Favoritos");
    }
}

console.log(`const CANCION_A = new Cancion('Aqui todo esta bien',2.53);
console.log(CANCION_A);`);

const CANCION_A = new Cancion('Aqui todo esta bien',2.53);
console.log(CANCION_A);

console.log(`CANCION_A.añadirAFavoritos();`);

CANCION_A.añadirAFavoritos();
// const CANCION = new Cancion('Aqui todo esta bien',2.53);
