// console.log('Mundo, soy yo otra vez');


console.log("CONSTANTES");

const NOMBRE = 'Mike'
console.log("const NOMBRE = 'Mike'");
console.log(NOMBRE);
console.log("");
console.log("El nombre de las constantes debería estar en MAYÚSCULAS");
console.log("Las constantes no pueden modificar el valor.");
console.log("Las constantes no pueden inicializar sin valor.");

console.log("");
console.log("");
console.log("VARIABLES");
console.log("Existen 2 formar de crear variables: con VAR y LET con ambas se pueden modificar el valor.");
console.log("");
console.log("La forma de nombrar las variables debería ser CamelCase ó SnakeCase, pero se opta por CamelCase.");
console.log("");
console.log("-> VAR");
var cancionFavorita = 'Amatista'
console.log("       var cancionFavorita = 'Amatista'");
console.log("       " + cancionFavorita);
console.log("       El VAR permite definir en más de una oportunidad una misma Variable, pero esto no es bueno");
console.log("       por lo que se recomienda evitar este uso");
var edad = 19;
var edad = 20;
console.log("       var edad = 19");
console.log("       var edad = 20");
console.log("       console.log('edad ', edad)");
console.log("       edad ", edad);

console.log("");
console.log("-> LET");
let cancionFavorita2 = 'Amatista'
console.log("       let cancionFavorita2 = 'Amatista'");
console.log("       " + cancionFavorita2);
console.log("       El LET NO permite definir en más de una oportunidad una misma Variable, ");
console.log("       por lo que se recomienda UTILIZAR el LET.");
// let edad = 19;
// let edad = 20;
console.log("       let edad = 19");
console.log("       let edad = 20");
console.log("       console.log('edad ', edad)");
console.log("       GENERA ERROR EN LA EJECUCIÓN");

console.log("");
console.log("");
console.log("SCOPE");
console.log("El SCOPE es el alcance que tiene una variable o una constante en el programa (Hasta dónde se puede acceder a ella.)");

console.log("");
console.log("El SCOPE de LET es Global (desde cualquier parte del código se puede acceder a esa variable.)");
console.log("        let numero = 18\n        {\n                let numero = 20;\n                console.log('numero dentro del Bloque', numero);\n        }\n        console.log('numero fuera del Bloque', numero)");

let numero = 18;

{
    let numero = 20;
    console.log("numero dentro del Bloque", numero);
}
console.log("numero fuera del Bloque", numero);
console.log("");
console.log("Pero si se declara dentro del bloque y si se desea acceder desde afura, esto generaría una error");
console.log("        {\n                let numero = 18\n        }\n        console.log('numero', numero)\n        GENERA ERROR");






console.log("");
console.log("El SCOPE de VAR es Hoisting (es decir, estas declaraciones son desplazadas en la parte superior del SCOPE)");
console.log("Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones");
console.log("        var numero2 = 18\n        {\n                var numero2 = 20;\n                console.log('numero dentro del Bloque', numero2);\n        }\n        console.log('numero fuera del Bloque', numero2)");

var numero2 = 18;

{
    var numero2 = 20;
    console.log("numero2 dentro del Bloque", numero2);
}
console.log("numero2 fuera del Bloque", numero2);

