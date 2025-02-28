const somarTodosMultiplos = require('../exercicio-3')

describe('Exercício 3 - Soma de múltiplos', () => {
    
    it('Deve retornar 156361 para multiplos de 5 e 7 somados', () => {
        expect(somarTodosMultiplos(1000, 5, 7)).toBe(156361)
    });

});