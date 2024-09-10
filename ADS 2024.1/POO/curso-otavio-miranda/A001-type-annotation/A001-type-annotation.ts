/* eslint-disable */

//Tipos básicos(aqui ocorre a inferância de tipos)
let nome: string = 'Luiz'; //Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010;
let adulto: boolean = true; //true ou false
let simbolo: symbol = Symbol('qualquer-symbol') //symbol
// let big: bigint = 10n; //bigint;


//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['a', 'b'];

//Objetos
// ?: >> indica que é opcional
//observe que essa forma de declarar um objeto ficar muito verboso, assim, podemos fazer um alias pra deixar mais enxuto.
let pessoa: {nome: string, idade: number, adulto?:boolean} = {
    idade: 30,
    nome: 'Luiz'
};

// Funções
function soma(x: number, y: number){
    return x + y;
}
