function arrayParaString(numeros) {
    var resultado = "";
    numeros.forEach(function (num, indice) {
        resultado += num.toString();
        if (indice < numeros.length - 1) {
            resultado += "-";
        }
    });
    return resultado;
}
// Usando a função
var meuArray = [1, 2, 3, 4, 5];
var stringResultado = arrayParaString(meuArray);
console.log(stringResultado); // Saída: 1-2-3-4-5
