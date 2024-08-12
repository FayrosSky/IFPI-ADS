import { question } from "readline-sync";

function main(){

    console.log('***** AREA Triangulo *****')
    // Entrada
    const base = Number(question('Base: '))
    const altura = Number(question('Alutura: '))

    // Processamento
    const area = calcular_area(base, altura)

    // Saída
    console.log(`A área do triângulo é: ${area}`)



}
    // definição de uma função
    function calcular_area(b, a){
        const resultado = (b * a)/2
        return resultado
    }
  
main()

