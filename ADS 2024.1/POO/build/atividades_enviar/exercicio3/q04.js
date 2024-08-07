"use strict";
function arrayParaString(numeros) {
    let resultado = "";
    numeros.forEach((num, indice) => {
        resultado += num.toString();
        if (indice < numeros.length - 1) {
            resultado += "-";
        }
    });
    return resultado;
}
// Usando a função
const meuArray = [1, 2, 3, 4, 5];
const stringResultado = arrayParaString(meuArray);
console.log(stringResultado); // Saída: 1-2-3-4-5
//# sourceMappingURL=q04.js.map