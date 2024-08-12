import { question } from "readline-sync";

let vetordeObjetos = [
    {nome: 'Objeto1', valor: 10 }, {nome: 'Objeto2', valor: 20 }, {nome: 'Objeto3', valor: 20}
];
/*
    for(let i = 0; i < vetordeObjetos.length; i++){
        console.log(`Nome: ${vetordeObjetos[i]['nome']}, Valor: ${vetordeObjetos[i]['valor']}`)
    }
*/

console.log("\nUsando forEach:");
vetordeObjetos.forEach(function(objeto){
    console.log(`Nome: ${objeto.nome}, Valor: ${objeto.valor}`)
})