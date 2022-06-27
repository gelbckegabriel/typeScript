function somarValoresNumericos (valor1: number, valor2: number)/*: number*/ { // utiliza-se o :number para evitar erros.
    return valor1 + valor2.toString(); // como o exemplo deste "toString" que foi inserido sem querer.
}

console.log(somarValoresNumericos(1, 3))

function printarValoresNumericos (valor1: number, valor2: number): void { // AUSÊNCIA DE RETORNO. void é uma função que pode rodar e não retornar nada.
    console.log(valor1 + valor2)
}

function somarValoresNumericosETratar (numero1: number, numero2: number, callback: (numero: number) => number):number { // CALLBACK - função que é passada por um parametro e ela roda quando certa ação ocorrer | '=>' significa o que ela vai retornar (void, number, string, etc).
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado (numero: number): number {
    return numero * numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado)) // aoQuadrado foi utilizado como callback.