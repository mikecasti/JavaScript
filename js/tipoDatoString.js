console.log("TIPO DE DATOS STRING");
console.log("Existen 3 formas de definir STRINGS:");
console.log("Con doble comilla, con comilla Simple y con BackTicks.");

console.log("");
console.log("DOBLES");
console.log("Permite utilizar comilla simple en el String.");

console.log("        const nombreD = ''Mike''");

const nombreD = "Mike"
console.log("        RESULTADO: ",nombreD);

console.log("        const nombreD1 = ''Mike's''");
const nombreD1 = "Mike's"
console.log("        RESULTADO: ",nombreD1);


console.log("");
console.log("");
console.log("SIMPLES");

console.log("        const nombreS = 'Mike'");
const nombreS = 'Mike'

console.log("");
console.log("");
console.log("BACKTICKS");
console.log("Permiten hacer salto de línea");
console.log("Se recomienda para realizar Concatenaciones.");
console.log("");
console.log("        const nombreB = `Mike`");
const nombreB = `Mike`

console.log("        const nombreB1 = `Mike");
console.log("        castillo` ");
const nombreB1 = `Mike
castillo`

console.log("        RESULTADO: ", nombreB1);

console.log("");
console.log("        CONCATENACIÓN");
console.log("        Forma Tradicional");
console.log(`                const msj = "mi nombre es " + nombreB; `);
const msj = "mi nombre es " + nombreB;
console.log("                RESULTADO: ", msj);
console.log("");
console.log("        Forma Recomendada");
console.log("        Para concatenar se usa el símbolo $ y Llaves, y dentro de las llaves se puede incluir código.");
console.log("                const msj2 = `mi nombre es ${nombreB}`;");
const msj2 = `mi nombre es ${nombreB}`;
console.log("                RESULTADO: ", msj2);
console.log("");
console.log("                const msj3 = `mi nombre es ${8*7}`;");
const msj3 = `mi nombre es ${8*7}`;
console.log("                RESULTADO: ", msj3);



console.log("");
console.log("MÉTODOS");


console.log("Split");
console.log("        const FRUTAS =  'Uvas,Manzadas,Peras,Sandías'");
console.log("        const RESULTADO = FRUTAS.split(',')");
const FRUTAS =  "        Uvas,Manzadas,Peras,Sandías"
const RESULTADO = FRUTAS.split(",")
console.log("        RESULTADO", RESULTADO);

console.log("");
console.log("Typeof");
console.log("Para obtener el tipo de dato.");


const NUM = 12
console.log("        const NUM = 12");
console.log("        console.log(typeof(NUM));");
console.log("        RESULTADO",typeof(NUM));
console.log("        console.log(RESULTADO,typeof('12'))");
console.log("        RESULTADO",typeof("12"));
console.log("        console.log(typeof(NUM.toString()))");
console.log("        RESULTADO",typeof(NUM.toString()));

