let indiceMaiorValor = (arr) => {
    let maiorValor = Math.max(...arr);
    return arr.indexOf(maiorValor);
}

let indiceMenorValor = (arr) => {
    let menorValor = Math.min(...arr);
    return arr.indexOf(menorValor);
}

let arr = [34, 5, 67, 89, 46, 10, 1000, 1];

console.log(`Índice de maior valor: ${indiceMaiorValor(arr)}`);
console.log(`Índice de menor valor: ${indiceMenorValor(arr)}`);