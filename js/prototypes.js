console.log("PROTOTIPOS Y COMO FUNCIONAN");
console.log("Cada vez que se crea un objeto en JavaScript, se agrega de manera automática los prototipos.");
console.log("Las cuales son como las sub funciones qur tiene nuestro objeto.");
console.log("Los objetos que creamos son como una instancia de la clase principal OBJECT.");
console.log("Los prototipos se almacenan en la plantilla del óbjeto' desde un inicio");

const PERSONA = {
    nombre: 'Sergio',
    edad: 25,
    saludo : function() {
        console.log("Hola");
    }
}


Object.prototype.dimeAlgo = function() {
    console.log("Algo!!!!!!");
}

const ELENA = Object.create(PERSONA);
ELENA.nombre = "Elena";


console.log("");
console.log("EJEMPLO");
console.log("");

console.log("Se crea el objeto");
console.log(`function Person(name, age) {
    this.name = name;
    this.age = age;
}`);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log("Se crean variables del objeto creado");
console.log(`var JUAN = new Person("Juan Ortiz", 25);
var VALERIA = new Person("Valeria Valdez", 22);`);

var JUAN = new Person("Juan Ortiz", 25);
var VALERIA = new Person("Valeria Valdez", 22);

console.log("");
console.log("Objetos ANTES de crear los PROTOTYPES");
console.log(JUAN, VALERIA);

console.log("");
console.log("Se crea una propiedad como prototypo.");
console.log(`Person.prototype.interest = ["tv shows", "soccer"];`);

Person.prototype.interest = ["tv shows", "soccer"];

console.log("");
console.log("Se crea una función como prototypo.");
console.log(`Person.prototype.getAge = function() {
  return this.age;
};`);

Person.prototype.getAge = function() {
  return "\nLa edad de " + this.name + " es " + this.age;
};

console.log("");
console.log("Objetos DESPUÉS de crear los PROTOTYPES");
console.log(JUAN, VALERIA);
console.log(JUAN.getAge(), VALERIA.getAge());
