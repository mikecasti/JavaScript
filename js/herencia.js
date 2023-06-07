console.log("HERENCIA");
console.log("Se debe tener en cuenta lo siguiente para trabajar co Herencia:");
console.log("- Se usa cuando tenemos entidades con Atributos Iguales.");
console.log("- La clave es encontrar Redundancia.");
console.log("- Existen Clases Padre (super clases) y Clases Hijas (subclases).");
console.log("");
console.log("Para utilizar Herencia, se utiliza la palabra clave: EXTENDS");
console.log("Cuando se Hwereda se debe considerar las propiedades de la Clase Padre");
console.log("Con la palabra reservada SUPER, en el constructor de las Clase Hija, se envías los daros que necesita la clase Padre. ");

console.log("");

console.log(`class Persona {

    constructor(nombre, edad, mujer, direccion) {
        this.nombre = nombre.toUpperCase(),
        this.edad = edad,
        this.mujer = mujer,
        this.direccion = direccion
    }

    saludar() {
        console.log("Un saludo soy " + this.nombre);
    }

    presentarme() {
        console.log('Hola!! mi nombre es '+ this.nombre +' y tengo '+ this.edad +' años un gusto.');
    }
}

class Alumno extends Persona {

    constructor(nombre, edad, mujer, direccion, matricula, carrera) {
        super(nombre, edad, mujer, direccion);

        this.matricula = matricula
        this.carrera = carrera    
    }
}

class Maestro extends Persona {

    constructor(nombre, edad, mujer, direccion, materias) {
        super(nombre, edad, mujer, direccion);

        this.materias = materias        
    }
}

const MAESTRO = new Maestro('Diego', 20, false,'Direccion 1',['Matemáticas','Física','Química']);
const ALUMNO = new Alumno('Abril', 14, true,'Direccion 2',20204037,'Técnico en Programación');

console.log(MAESTRO);
console.log(ALUMNO);`); 

class Persona {

    constructor(nombre, edad, mujer, direccion) {
        this.nombre = nombre.toUpperCase(),
        this.edad = edad,
        this.mujer = mujer,
        this.direccion = direccion
    }

    saludar() {
        console.log("Un saludo soy " + this.nombre);
    }

    presentarme() {
        console.log(`Hola!! mi nombre es ${this.nombre} y tengo ${this.edad} años un gusto.`);
    }
}

class Alumno extends Persona {

    constructor(nombre, edad, mujer, direccion, matricula, carrera) {
        super(nombre, edad, mujer, direccion);

        this.matricula = matricula
        this.carrera = carrera    
    }
}

class Maestro extends Persona {

    constructor(nombre, edad, mujer, direccion, materias) {
        super(nombre, edad, mujer, direccion);

        this.materias = materias        
    }
}

const MAESTRO = new Maestro('Diego', 20, false,'Direccion 1',['Matemáticas','Física','Química']);
const ALUMNO = new Alumno('Abril', 14, true,'Direccion 2',20204037,'Técnico en Programación');

console.log(MAESTRO);
console.log(ALUMNO);

console.log(`MAESTRO.saludar();
ALUMNO.presentarme();`);

MAESTRO.saludar();
ALUMNO.presentarme();