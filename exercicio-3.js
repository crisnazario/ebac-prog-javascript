function somarTodosMultiplos(abaixoDe, valor1, valor2) {
    let soma = 0;
    for (let i = 1; i < abaixoDe; i++) {
        if (i % valor1 === 0 || i % valor2 === 0) {
            soma += i;
        }
    }
    return soma
}

module.exports = somarTodosMultiplos