"use strict";
function somarValoresNumericos(valor1, valor2) {
    return valor1 + valor2.toString(); // como o exemplo deste "toString" que foi inserido sem querer.
}
console.log(somarValoresNumericos(1, 3));
function printarValoresNumericos(valor1, valor2) {
    console.log(valor1 + valor2);
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado)); // aoQuadrado foi utilizado como callback.
