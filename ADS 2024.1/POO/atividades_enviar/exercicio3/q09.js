var numeros = [1, 2, 3, 4, 5];
var numerosEmDobro = numeros.map(function (num) { return num * 2; });
console.log(numerosEmDobro); // Saída: [2, 4, 6, 8, 10]
var somaTotal = numeros.reduce(function (acumulador, num) { return acumulador + num; }, 0);
console.log(somaTotal); // Saída: 15
