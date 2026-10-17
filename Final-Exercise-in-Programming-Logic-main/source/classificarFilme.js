// Criar um projeto node no vsCode, seguindo a estrutura já compartilhada na aula 4, contendo o código de aplicação/fonte e arquivos de teste. 
// Deve conter ao menos 3 casos de teste em cada um dos exercícios. 
// Entrega por meio de um repositório do github atualizado. 
// Você tem um vetor com notas de diferentes usuários para os respectivos filmes: 
// Entrada: [ {nome: "Minha mãe é uma peça", avaliações: [5,4,4,4,5]}, 
// {nome: "Saneamento Básico", avaliações: [3,4,2,3,4]}, 
// {nome: "Se eu fosse você", avaliações: [1,2,3]} ] 
// Saída: Quantas pessoas votaram no filme? Qual é a média das notas? Deve retornar a avaliação: 
// Media >=4 "Filme recomendado" 
// Media entre 3 e 4 "Filme razoável"
// Média <3 "Filme ruim""

function classificarFilme(filmes) {
    return filmes.map(filme => {
        const totalAvaliacoes = filme.avaliacoes.length;

        if (totalAvaliacoes === 0) {
            return {
                nome: filme.nome,
                totalAvaliacoes: 0,
                media: 0,
                avaliacao: "Filme ruim"
            };
        }

        const somaAvaliacoes = filme.avaliacoes.reduce((soma, nota) => soma + nota, 0);
        const media = somaAvaliacoes / totalAvaliacoes;

        let avaliacao;
        if (media >= 4) {
            avaliacao = "Filme recomendado";
        } else if (media >= 3) {
            avaliacao = "Filme razoável";
        } else {
            avaliacao = "Filme ruim";
        }

        return {
            nome: filme.nome,
            totalAvaliacoes: totalAvaliacoes,
            media: media,
            avaliacao: avaliacao
        };
    });
}       

module.exports = {classificarFilme};