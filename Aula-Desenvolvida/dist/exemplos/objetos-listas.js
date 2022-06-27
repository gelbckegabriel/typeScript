"use strict";
const gabriel = {
    nome: "Gabriel",
    idade: 20,
    profissão: 'Desenvolvedor' // exemplo.
};
const junior = {
    nome: 'Junior',
    idade: 31,
    profissão: 'desevolvedor' // exemplo.
};
const roseli = {
    nome: "Roseli",
    idade: 60,
    profissão: 'Autônoma'
};
roseli.idade = 61;
// Para evitar o risco de digitar propriedades erradas que você sabe que irá se repetir, cria-se um ENUM.
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Aut\u00F4nomo"] = 1] = "Aut\u00F4nomo";
    Profissao[Profissao["Ator"] = 2] = "Ator";
    Profissao[Profissao["Veterin\u00E1rio"] = 3] = "Veterin\u00E1rio";
    Profissao[Profissao["Tatuador"] = 4] = "Tatuador";
    Profissao[Profissao["Estagi\u00E1rio"] = 5] = "Estagi\u00E1rio";
})(Profissao || (Profissao = {}));
const matheus = {
    nome: 'Matheus',
    idade: 27,
    profissao: Profissao.Desenvolvedor
};
const giullyane = {
    nome: 'Giullyane',
    idade: 17,
    materias: ['Biologia', 'Anatomia', 'Inteligência Emocional']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(giullyane.materias);
