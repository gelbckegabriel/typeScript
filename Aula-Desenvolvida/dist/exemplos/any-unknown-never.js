"use strict";
let anyReturn;
anyReturn = 1;
anyReturn = '1';
anyReturn = false;
let stringTest;
stringTest = anyReturn;
let valorUnknown;
valorUnknown = 3;
valorUnknown = '3';
valorUnknown = false;
valorUnknown = 'vai sim';
let stringTest2 = 'agora vai'; // ele dá erro pq o valor é desconhecido.
/*stringTest2 = valorUnknown;*/
if (typeof valorUnknown == 'string') { // ele aceita por causa que o if cria a condição para identificar o tipo dele.
    stringTest2 = valorUnknown;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo }; // throw serve para jogar o erro;
}
jogaErro('deu erro', 500);
