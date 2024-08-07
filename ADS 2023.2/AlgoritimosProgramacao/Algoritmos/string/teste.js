import { print } from "../utils/input.js";

function main(){
/*    
//Make a vector
var vetor = [1, 2, 3, 4, 5];

let vetor2 = [1, 2, 3]

//Acessando elementos do vetor
print(vetor[4])

//Alterando elementos do vetor
vetor[2] = 10

print(vetor[2])


//Descobrindo o tamanho do vetor
print("Tamanho do vetor: " + vetor.length)
print("Tamanho do vetor2: " + vetor2.length)


//Iterando através do vetor
for (let i = 0; i < vetor.length; i++){
  print("Elemento " + i + ": " + vetor[i]);
}

//Encontrando o índice de um elemento no vetor
let indice = vetor.indexOf(4)
print("Índice do valor 4:" + indice)

//Removendo um elemento por índice
vetor.splice(indice, 1); //Remove o elemento no índce "índice"
print(vetor)
// Juntando elementos do vetor em uma String

*/

//Criar vetor
const carros = ['Argo', 'Gol', 'Onix']

print(carros)

//Crir um vetor vazio com 10 posições (undefined)
const lista = new Array(10)
print(lista)

//Criar vetor com um elemento
const valores = [10]
print(valores)

//Criar um vetor  a partir de outro vetor(copiar)
const dados = Array.from([2, 4, 5])
print(dados)

//Criar um vetor a partir de outro vetor (alterando)
const quadrados = Array.from(dados, (vlr, idx) => vlr * 2)
print(quadrados)

//Criar um vetor a partir do "nada", e gerar seus valores
const numeros = Array.from({length: 5}, (valor, index) => index) 
print(numeros)



}
main()