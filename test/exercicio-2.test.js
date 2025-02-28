const { indiceMaiorValor, indiceMenorValor } = require('../exercicio-2')


describe('Exercício 2 - Índice de Menor e Maior valor', () => {

    const arr = [99, 100, 1, 5, 90, 10, 3];

    it('Índice de maior valor deve ser [1]', () => {
        expect(indiceMaiorValor(arr)).toBe(1)
    });

    it('Índice de menor valor deve ser [2]', () => {
        expect(indiceMenorValor(arr)).toBe(2)
    });
});