//Quantas palvras tem mais de 5 letras

const frase = "Aprenda programação seguindo o 1% programador"

let palavras = frase.split(" ")

let contador = 0;

/*
for(let i = 0; i < palavras.length; i++){
        if(palavras[i].length > 5){
            contador = contador + 1       
        }
    }
*/

for(let palavra of palavras){
    if(palavra.length > 5)
        contador++
}
    print(palavras)
    print(contador)


function print(frase){
    console.log(frase)
}