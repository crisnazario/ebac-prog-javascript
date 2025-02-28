const mdc = require('../exercicio-1')

describe('Exercício 1 - MDC', () => {

    it('Deve calcular o MDC de 48 e 108 com sucesso', () => {
        expect(mdc(48, 108)).toBe(12)
    });

    it('Deve retornar falha ao calcular o MDC', () => {
        expect(mdc(48, 108)).not.toBe(122)
    });

});