console.log("TIPO DE DATOS BOOLEANOS");
console.log("Éstos tipos de datos pueden tener 2 valores (Verdaderos o Falsos).");
console.log("");
console.log("Datos que arrojan VERDADERO:");
console.log("        true");
console.log("        1");
console.log("        {}");
console.log("        []");

console.log("");
console.log("Datos que arrojan FALSO:");
console.log("        false");
console.log("        0");
console.log("        undefined");
console.log("        null");
console.log("        NaN");

console.log("");
console.log("OPERADORES LÓGICOS");
console.log("Los operadores son: <   >   <=   >=   !=   ===   ==");

console.log("        const RESULTADO = 5 > 2");
const RESULTADO = 5 > 2;
console.log("        RESULTADO",RESULTADO);

console.log("        const RESULTADO = 5 < 2");
const RESULTADO2 = 5 < 2;
console.log("        RESULTADO",RESULTADO2);

console.log("        const RESULTADO = 5 != 2");
const RESULTADO3 = 5 != 2;
console.log("        RESULTADO",RESULTADO3);

console.log("        const RESULTADO = 5 == 5     (Simple Igualdad)");
const RESULTADO4 = 5 == 5;
console.log("        RESULTADO",RESULTADO4);

console.log("        const RESULTADO = 5 == '5'   (Simple Igualdad)");
const RESULTADO5 = 5 == '5';
console.log("        RESULTADO",RESULTADO5);

console.log("        const RESULTADO = 5 === '5'   (Estricta Igualdad)");
const RESULTADO6 = 5 === '5';
console.log("        RESULTADO",RESULTADO6);

console.log("* Estricta Igualdad => También verifica el tipo de dato.");

console.log("");
console.log("Otros operadores: ");
console.log("                  & (AND => VERDADERO = Todas las condiciones deben ser verdaderas)");
console.log("                  | (OR => VERDADERO = Al menos una condición debe ser verdadera)");

console.log("        const RESULTADO = (5 >= 5) && (10 < 40) && (5 === 5)");
const RESULTADO7 = (5 >= 5) && (10 < 40) && (5 === 5);
console.log("        RESULTADO",RESULTADO7);

console.log("        const RESULTADO = (5 >= 5) || (10 < 4) || (5 === 5)");
const RESULTADO8 = (5 >= 5) || (10 < 4) || (5 === 5);
console.log("        RESULTADO",RESULTADO8);

console.log("");
console.log("                  && (AndAlso => Si el primer operando se devuelve como falso, el segundo nunca será evaluado y se devolverá el primer operando.");
console.log("                  || (OrElse => Si el primer valor se devuelve como verdadero, el segundo nunca será evaluado y el primer operando será devuelto.");


console.log("        var arg2;");
console.log('        Tipo de dato de arg2: ', typeof arg2);
console.log("        const RESULTADO9 = !(arg2 === undefined) & (arg2 > 3)");

var arg2;
const RESULTADO9 = !(arg2 === undefined) & (arg2 > 3) 
console.log('        RESULTADO', RESULTADO9);

console.log("");
console.log('        Tipo de dato de arg2: ', typeof arg2);
console.log("        const RESULTADO9 = !(arg2 === undefined) && (arg2 > 3)");

const RESULTADO10 = !(arg2 === undefined) && (arg2 > 3) 
console.log('        RESULTADO', RESULTADO10);


console.log("");
console.log("IF - ELSE");
console.log("        const EDAD = 18;");
const EDAD = 18;
if (EDAD > 18) {
    console.log("        Es mayor de Edad");
} else if (EDAD === 18) {
    console.log("        Apenas es mayor de Edad");
} else {
    console.log("        Es menor de Edad");
}

console.log("");
console.log("Operador TERNARIO");
console.log("Nos sirve para las condiciones IF de una sola línea.");
console.log("Sintaxis:");
console.log("        Condición ? códigoSiVerdadero : códigoSiFalso");

console.log("        var mensajeroDisponible = false;");
console.log("        console.log((mensajeroDisponible) ? 'Mensaje Enviado' : 'El mensaje no se pudo enviar');");
var mensajeroDisponible = false;
console.log((mensajeroDisponible) ? '        Mensaje Enviado' : '        El mensaje no se pudo enviar');
console.log("");
console.log("        var mensajeroDisponible = true;");
console.log("        console.log((mensajeroDisponible) ? 'Mensaje Enviado' : 'El mensaje no se pudo enviar');");
mensajeroDisponible = true;
console.log((mensajeroDisponible) ? '        Mensaje Enviado' : '        El mensaje no se pudo enviar');


console.log("");
console.log("SWITCH");
const MES = 16;

switch (MES) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    case 13:
    case 14:
    case 15:
        console.log("Meses del próximo año");
        break;    
    default:
        console.log("El Mes no existe.");
        break;
}