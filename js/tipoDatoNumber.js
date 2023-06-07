console.log("TIPO DE DATOS NUMBER");
console.log("En JS no existe diferencia entre los números grandes, pequeños o con punto decimal.");
console.log("Los números se pueden grabar en Variables o Constantes.");

console.log("");
console.log("NÚMEROS");

console.log("        const NUMERO = 13.141516;");
const NUMERO = 13.141516
console.log("        RESULTADO",NUMERO);
console.log("        console.log(typeof NUMERO)");
console.log("        RESULTADO",typeof NUMERO);

console.log("");
console.log("OPERADORES ARITMÉTICOS");

console.log("        const RESULTADO = 9 + 3");
const RESULTADO = 9 + 3;
console.log("        RESULTADO",RESULTADO);

console.log("        const RESULTADO = 9 - 3");
const RESULTADO2 = 9 - 3;
console.log("        RESULTADO",RESULTADO2);

console.log("        const RESULTADO = 9 * 3");
const RESULTADO3 = 9 * 3;
console.log("        RESULTADO",RESULTADO3);

console.log("        const RESULTADO = 9 / 3");
const RESULTADO4 = 9 / 3;
console.log("        RESULTADO",RESULTADO4);

console.log("        const RESULTADO = 5 ** 3 (Potencia => 5^3)");
const RESULTADO5 = 5 ** 3;
console.log("        RESULTADO",RESULTADO5);


console.log("");
console.log("PARSEO");
console.log("Para realizar el Parseo existen varias formas:");
console.log("Primera forma:");

console.log("        const NUMERO_TEXTO = '50';");
console.log("        const NUMERO1 = Number(NUMERO_TEXTO);");
console.log("        console.log(typeof NUMERO1, NUMERO1);");

const NUMERO_TEXTO = "50";
const NUMERO1 = Number(NUMERO_TEXTO);
console.log("        RESULTADO",typeof NUMERO1, NUMERO1);

console.log("");
console.log("Segunda forma:");

console.log("        const NUMERO_TEXTO1 = '50.45';");
console.log("        const NUMERO2 = Number.parseInt(NUMERO_TEXTO1);");
console.log("        console.log(typeof NUMERO2, NUMERO2);");

const NUMERO_TEXTO1 = "50.54";
const NUMERO2 = Number.parseInt(NUMERO_TEXTO1);
console.log("        RESULTADO",typeof NUMERO2, NUMERO2);

console.log("");
console.log("        const NUMERO3 = Number.parseFloat(NUMERO_TEXTO1);");
console.log("        console.log(typeof NUMERO3, NUMERO3);");
const NUMERO3 = Number.parseFloat(NUMERO_TEXTO1);
console.log("        RESULTADO",typeof NUMERO3, NUMERO3);

