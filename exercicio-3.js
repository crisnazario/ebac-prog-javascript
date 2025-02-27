(function () {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    console.log(`A soma de todos os múltiplos de 5 e 7 abaixo de 1000 é => ${soma}`)
})()