// Primera línea en blanco
console.log();

//Captura de la hora
var hora = new Date().getHours();

//línea con el saludo
if (hora > 12 && hora < 22) {
    console.log(`Good evening, it's ${hora} o'clock`);
} else if ((hora > 22 && hora < 24) || (hora > 0 && hora < 6)) {
    console.log(`Good night, it's ${hora} o'clock`);
} else if (hora > 6 && hora < 12) {
    console.log(`Good morning, it's ${hora} o'clock`);
}

//línea en blanco
console.log();

//Número PI con 6 decimales
var pi = (Math.PI).toPrecision(7);
console.log(`Number PI with 6 decimals: ${pi}`);

//línea en blanco
console.log();

//La tabla con los números enteros de 0 a 22 en decimal, hexadecimal, octal y binario
for (var i = 0; i < 23; i++) {
    console.log(`${i} dec = ${(i).toString(16)} hex = ${(i).toString(8)} oct = ${(i).toString(2)} bin`);
}

//línea en blanco
console.log();

//Una tabla similar de 1 a 21, pero solo con los impares no incluidos en el intervalo de 10 a 20
for (var i = 0; i < 23; i++) {
    if (i % 2 != 0) {
        console.log(`${i} dec = ${(i).toString(16)} hex = ${(i).toString(8)} oct = ${(i).toString(2)} bin`);
    }
}

//línea en blanco
console.log();

//La siguiente frase utilizando caracteres escapados para representar hola en chino
console.log("Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417");

//línea en blanco
console.log();

//Finalizar programa
console.log("The program has finished");
