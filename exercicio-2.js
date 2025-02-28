let indiceMaiorValor = (arr) => {
    let maiorValor = Math.max(...arr);
    return arr.indexOf(maiorValor);
}

let indiceMenorValor = (arr) => {
    let menorValor = Math.min(...arr);
    return arr.indexOf(menorValor);
}

module.exports = {indiceMaiorValor, indiceMenorValor}