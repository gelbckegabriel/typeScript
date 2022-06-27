"use strict";
// O ANY DEIXA ATRIBUIR QUALQUER TIPO DE VALOR.
let valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
let valorString = 'teste';
valorString = valorAny; // indicio de problemas, o que só aceitava string, agora aceita qualquer coisa.
let valorString2 = 'testão';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2); // vai retornar 2 por ser true + true.
