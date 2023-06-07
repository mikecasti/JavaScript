console.log("OBJETOS NO LITERALES");
console.log("Es una función cuyo propósito es construir objetos.");
console.log("Para acceder a las propiedades se debe utilizar la palabra reservada THIS");

console.log(`
function Cancion(nombre, duracion) {
    this.nombre = nombre
    this.duracion = duracion
    this.añadirAFavoritos = () => {
        console.log("La canción se añadió a Favoritos");
    }
}`);

function Cancion(nombre, duracion) {
    this.nombre = nombre
    this.duracion = duracion
    this.añadirAFavoritos = () => {
        console.log("La canción se añadió a Favoritos");
    }
}

const CANCION3 = new Cancion('Aqui todo esta bien', 3.02);
console.log(CANCION3);

const CANCION4 = new Cancion('La de 10', 4.54);
console.log(CANCION4);

console.log("");
console.log("Se crea un nuevo objeto para ejemplo del prototipo.");
console.log(`function CancionNueva(nombre, duracion) {
    this.nombre = nombre
    this.duracion = duracion
    }
}`);

function CancionNueva(nombre, duracion) {
    this.nombre = nombre
    this.duracion = duracion
}

console.log("Se agrega la función: añadirAFavoritos, como prototipo.");
console.log(`CancionNueva.prototype.añadirAFavoritos = () => {
    console.log("La canción se añadió a Favoritos.");
}`);
CancionNueva.prototype.añadirAFavoritos = () => {
    console.log("La canción se añadió a Favoritos.");
}

console.log("Se accede a la función que fue declarada como prototipo.");
console.log("const CANCION5 = new CancionNueva('Ed Shream', 5.47);");
console.log("console.log(CANCION5);");
console.log("CANCION5.añadirAFavoritos();");
const CANCION5 = new CancionNueva('Ed Shream', 5.47);
console.log(CANCION5);
CANCION5.añadirAFavoritos();