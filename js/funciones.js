console.log("FUNCIONES");
console.log("Las Funciones son un bloque de código que se van a ejecutar cada que se los invoque.");

console.log("");
console.log("FUNCION DECLARADA");
console.log("Éstas funciones tiene un nombre Declarado.");
console.log("Pueden ser accedidas antes de ser declaradas.");

console.log("        function saludar(nombre) {\n                console.log('hola ' + nombre + '!!!!!!');\n        }\n        saludar('Mike')");

function saludar(nombre) {
    console.log("        RESULTADO", "hola " + nombre + "!!!!!!");
}
saludar("Mike");

console.log("");
console.log("        function saludar2(nombre = 'Sin Dato') {\n                return 'Funcion con parámetros por defecto -> ' + nombre;\n        }\n        console.log(saludar2())");

function saludar2(nombre = 'Sin Dato') {
    return "Funcion con parámetros por defecto -> " + nombre;
}
console.log("        RESULTADO", saludar2());


console.log("");
console.log("");
console.log("FUNCION ANÓNIMA");
console.log("Éstas funciones NO tienen un nombre establecido.");
console.log("Éstas funciones deben ser asignadas a una Variable o Constante.");
console.log("Éstas funciones pueden ser Auto Ejecutables.");

console.log("        const sumaAnonima = function(num1, num2) {\n                return num1 + num2;\n        }\n        console.log(sumaAnonima(5,9));");

const sumaAnonima = function(num1, num2) {
    return num1 + num2;
}
console.log("        RESULTADO", sumaAnonima(5,9));

console.log("");
console.log("");
console.log("FUNCION FLECHA");
console.log("Éstas funciones son similares a las funciones Anónimas porque no tienen nombre.");
console.log("Pero éstas se declaran con paréntesis (que pueden tener parámetros) y luego con => y llaves.");
console.log("Éstas funciones deben ser asignadas a una Variable o Constante.");
console.log("Éstas funciones hace un Return Implícito.");

console.log("        let sumaFlecha = (num1, num2) => {\n                return num1 + num2;\n        }\n        console.log(sumaFlecha(7,8));");

let sumaFlecha = (num1, num2) => {
    return num1 + num2;
}
console.log("        RESULTADO", sumaFlecha(7,8));

console.log("");
console.log("");
console.log("DIFERENCIAS ENTRE ÉSTAS 3 FUNCIONES");
console.log("En las funciones Declaradas, se pueden invocar a la función previo a ser declaradas, mientras que en las funcionesd Anónimas y Fecha, previemente se deben declarar antes de invocarlas.");
console.log("");