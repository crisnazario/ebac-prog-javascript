function mdc(valor1, valor2) {
    while (valor2 !== 0) {
        let provisorio = valor2;

        valor2 = valor1 % valor2;
        valor1 = provisorio
    }
    return valor1;
}

console.log(mdc(48,108))