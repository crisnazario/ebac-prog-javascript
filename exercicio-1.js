function mdc(valor1, valor2) {
    while (valor2 !== 0) {
        const provisorio = valor2;

        valor2 = valor1 % valor2;
        valor1 = provisorio
    }
    return valor1;
}

module.exports = mdc