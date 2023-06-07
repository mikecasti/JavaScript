console.log("ARREGLOS - ARRAYS");

console.log("Arreglo de una (1) dimensión");
const ARREGLO = ['A',true, 50, 14.8, false];
console.log(ARREGLO);

console.log("");
console.log("Arreglo Bidimensión");
const ARREGLO_BI = [['A','B'],[true,true,false], [50, 14.8, 0],['Mike','Susy','Faby','Axel']];
console.log(ARREGLO_BI);

console.log("const FAMILIA = ['Mike','Susy','Faby','Axel'];");
const FAMILIA = ['Mike','Susy','Faby','Axel'];
console.log('Para obtener el tamaño: FAMILIA.length', FAMILIA.length);
console.log("Para obtener un elemento especìfico: 'Mi hija es' + FAMILIA[2]");
console.log("                                      Mi hija es", FAMILIA[2]);

console.log("Para AGREGAR un nuevo elemento al Final del Array: FAMILIA.push('Copo y Lucas')");
FAMILIA.push('Copo y Lucas');
console.log(FAMILIA);
console.log("Para AGREGAR un nuevo elemento al Principio del Array: FAMILIA.unshift('Ana')");
FAMILIA.unshift('Ana');
console.log(FAMILIA);

console.log("Para ELIMINAR el Último elemento del Array: FAMILIA.pop()");
FAMILIA.pop();
console.log(FAMILIA);

console.log("Para ELIMINAR el Primer elemento del Array: FAMILIA.shift()");
FAMILIA.shift();
console.log(FAMILIA);

console.log("");
console.log("");
console.log("RECORRER UN ARREGLO");
console.log("ForEach");

console.log(`FAMILIA.forEach((miembro, i) => {
    console.log(miembro,i);
})`);
FAMILIA.forEach((miembro, i) => {
    console.log(miembro,i);
})

console.log("");
console.log("");
console.log("MÉTODOS");
console.log("JOIN - Permite convertir el contenido del array en una cadena de texto con un separador");
console.log("        const PERSONAS = FAMILIA.join(',');");
const PERSONAS = FAMILIA.join(',');
console.log("        Resultado",PERSONAS);

console.log("");
console.log("CONAT - Método para unir 2 o más arreglos, retornando un nuevo arreglo.");
console.log("        const FRUTAS1 = ['Uva','Pera','Manzana'];");
console.log("        const FRUTAS2 = ['Sandía','Cereza','Mango'];");
console.log("        const FRUTAS = FRUTAS1.concat(FRUTAS2);");
const FRUTAS1 = ['Uva','Pera','Manzana'];
const FRUTAS2 = ['Sandía','Cereza','Mango'];
const FRUTAS = FRUTAS1.concat(FRUTAS2);
console.log("        Resultado",FRUTAS);

console.log("");
console.log("MAP - Operador para transformar los elemento de un arreglo, devuelve un nuevo arreglo.");
console.log("        const NUMEROS = [10,20,30,40];");
console.log("        const NUMEROS_PEQUEÑOS = NUMEROS.map((elemento, indice)=> {");
console.log("                                                  return elemento / 10;");
console.log("                                 });");
const NUMEROS = [10,20,30,40]
const NUMEROS_PEQUEÑOS = NUMEROS.map((elemento, indice)=> {
    return elemento / 10;
});
console.log("        Resultado",NUMEROS_PEQUEÑOS);


console.log("");
console.log("FILTER - Devuelve un array con los elementos que cumplan la condición.");

console.log("        const NUMEROS2 = [1,23,301,40,47,78,24,102,13]");
console.log("        const NUMEROS_PARES = NUMEROS2.filter((valor,indice) => {");
console.log("                                                  return (valor % 2) === 0");
console.log("                                 });");

const NUMEROS2 = [1,23,301,40,47,78,24,102,13]
const NUMEROS_PARES = NUMEROS2.filter((valor,indice) => {
    return (valor % 2) === 0
});
console.log("        Resultado", NUMEROS_PARES);

console.log("");
console.log("EVERY - Todos los elementos del arreglo deben cumplir con la condición. Devuelve un valor Booleano.");

console.log("        const NUMEROS = [10,20,30,40];");
console.log("        console.log(NUMEROS.every((valor, indice) => {");
console.log("                                   return valor <= 100;");
console.log("                     });");
console.log("        Resultado", NUMEROS.every((valor, indice) => {
    return valor <= 100;
}));

console.log("");
console.log("        const NUMEROS = [10,20,30,40];");
console.log("        console.log(NUMEROS.every((valor, indice) => {");
console.log("                                   return valor > 35;");
console.log("                     });");
console.log("        Resultado", NUMEROS.every((valor, indice) => {
    return valor > 35;
}));

console.log("");
console.log("SOME - Al menos un (1) elemento del arreglo debe cumplir con la condición. Devuelve un valor Booleano.");

console.log("        const FAMILIA = ['Mike','Susy','Faby','Axel'];");
console.log("        console.log(FAMILIA.some((valor, indice) => {");
console.log("                                   return valor.includes('x');");
console.log("                     });");
console.log("        Resultado", FAMILIA.some((valor, indice) => {
    return valor.includes('x');
}));

console.log("");
console.log("FIND - Devuelve el primer elemento del arreglo que satisface la condición.");
console.log("        const NUMEROS = [10,20,30,40];");
console.log("        console.log(NUMEROS.find((valor, indice) => {");
console.log("                                   return valor >= 15;");
console.log("                     });");
console.log("        Resultado", NUMEROS.find((valor, indice) => {
    return valor > 15;
}));

console.log("");
console.log("REDUCE - Devuelve el resultado acumulado cuando el origen se completa, dado un valor semilla opcional");

console.log("        const NUMEROS = [10,20,30,40];");
console.log("        const RESULTADO = NUMEROS.reduce((valAcumulado, valActual, indice) => {");
console.log("                                          return valAcumulado + valActual;");
console.log("                                 });");

const RESULTADO = NUMEROS.reduce((valAcumulado, valActual, indice) => {
    return valAcumulado + valActual;
})

console.log("        Resultado", RESULTADO);

console.log("");
console.log("        const NUMEROS = [10,20,30,40];");
console.log("        const RESULTADO = NUMEROS.reduce((valAcumulado, valActual, indice) => {");
console.log("                                          return valAcumulado + valActual;");
console.log("                                 },50);");

const RESULTADO2 = NUMEROS.reduce((valAcumulado, valActual, indice) => {
    return valAcumulado + valActual;
},50)

console.log("        Resultado2", RESULTADO2);