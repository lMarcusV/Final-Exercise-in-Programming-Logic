const {test,describe} = require('node:test');
const assert = require('node:assert/strict');
const { classificarFilme } = require('../source/classificarFilme');

describe('classificarFilme', () => {
    test('Deve classificar corretamente os filmes com base nas avaliações', () => {
        const filmes = [
            { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
            { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },
            { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] }
        ];  
        const resultado = classificarFilme(filmes);
        assert.strictEqual(resultado[0].avaliacao, "Filme recomendado");
        assert.strictEqual(resultado[1].avaliacao, "Filme razoável");
        assert.strictEqual(resultado[2].avaliacao, "Filme ruim");
    });

    test('Deve retornar "Filme ruim" para filmes sem avaliações', () => {
        const filmes = [
            { nome: "Filme sem avaliações", avaliacoes: [] }
        ];
        const resultado = classificarFilme(filmes);
        assert.strictEqual(resultado[0].avaliacao, "Filme ruim");
        assert.strictEqual(resultado[0].totalAvaliacoes, 0);
        assert.strictEqual(resultado[0].media, 0);
    });
    
    test('Deve classificar filmes com média menor que 3 como "Filme ruim"', () => {
        const filmes = [
            { nome: "Filme ruim", avaliacoes: [1, 2, 2] }
        ];
        const resultado = classificarFilme(filmes);
        assert.strictEqual(resultado[0].avaliacao, "Filme ruim");
        assert.strictEqual(resultado[0].totalAvaliacoes, 3);
        assert.strictEqual(resultado[0].media, (1 + 2 + 2) / 3);
    });

    test('Deve recomendar filmes com média maior ou igual a 4', () => {
        const filmes = [
            { nome: "Filme excelente", avaliacoes: [5, 4, 5, 4] }
        ];
        const resultado = classificarFilme(filmes);
        assert.strictEqual(resultado[0].avaliacao, "Filme recomendado");
        assert.strictEqual(resultado[0].totalAvaliacoes, 4);
        assert.strictEqual(resultado[0].media, (5 + 4 + 5 + 4) / 4);
    }); 
});
