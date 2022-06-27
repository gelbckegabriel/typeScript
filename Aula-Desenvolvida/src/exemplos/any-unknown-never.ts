let anyReturn: any;
anyReturn = 1;
anyReturn = '1';
anyReturn = false;

let stringTest: string;
stringTest = anyReturn;

let valorUnknown: unknown;
valorUnknown = 3;
valorUnknown = '3';
valorUnknown = false;
valorUnknown = 'vai sim'

let stringTest2: string = 'agora vai'; // ele dá erro pq o valor é desconhecido.
/*stringTest2 = valorUnknown;*/

if (typeof valorUnknown == 'string') { // ele aceita por causa que o if cria a condição para identificar o tipo dele.
    stringTest2 = valorUnknown;
}

function jogaErro (erro: string, codigo: number): void { // ele aceita o void neste caso, porém não é necessariamente um void. também pode-se utilizar o "NEVER" para simbolizar um código que nunca foi finalizado.
    throw {error: erro, code: codigo} // throw serve para jogar o erro;
}

jogaErro('deu erro', 500);