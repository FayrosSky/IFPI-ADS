const numeros = [1, 2, 3, 4, 5];

const numerosEmDobro = numeros.map(num => num * 2);
console.log(numerosEmDobro); // Saída: [2, 4, 6, 8, 10]

const somaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(somaTotal); // Saída: 15