const gabriel = {
    nome: "Gabriel",
    idade: 20,
    profissão: 'Desenvolvedor' // exemplo.
}

const junior: {nome: string, idade: number, profissão: string} = {
    nome: 'Junior',
    idade: 31,
    profissão: 'desevolvedor' // exemplo.
}

const roseli = {
    nome: "Roseli",
    idade: 60,
    profissão: 'Autônoma'
}

roseli.idade = 61;



// Para evitar o risco de digitar propriedades erradas que você sabe que irá se repetir, cria-se um ENUM.

enum Profissao {
    Desenvolvedor,
    Autônomo,
    Ator,
    Veterinário,
    Tatuador,
    Estagiário
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao // atribuir o ENUM criado.
}

const matheus: Pessoa = {
    nome: 'Matheus',
    idade: 27,
    profissao: Profissao.Desenvolvedor
}

interface Estudante extends Pessoa {
    materias: string[]
}

const giullyane: Estudante = {
    nome: 'Giullyane',
    idade: 17,
    materias: ['Biologia', 'Anatomia', 'Inteligência Emocional']
}

function listar (lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(giullyane.materias)