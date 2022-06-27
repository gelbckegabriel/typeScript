// O ANY DEIXA ATRIBUIR QUALQUER TIPO DE VALOR.
let valorAny: any;
valorAny = 3;
valorAny = "Olá";
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny; // indicio de problemas, o que só aceitava string, agora aceita qualquer coisa.
let valorString2: string = 'testão';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2); // vai retornar 2 por ser true + true.
