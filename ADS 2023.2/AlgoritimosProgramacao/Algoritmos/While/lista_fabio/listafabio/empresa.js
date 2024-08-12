import { get_number, print } from "../../utils/input.js";

function calcularSalarioLiquido() {
  const valorHoraTrabalhada = 12.0;
  const valorPorDependente = 40.0;
  const taxaINSS = 0.085; // 8.5%
  const taxaIR = 0.05; // 5%

  let n = get_number("Quantos funcionários deseja calcular o salário líquido?");
  let contador = 0;

  while (contador < n) {
    const codigoFuncionario = get_number("Digite o código do funcionário:");
    const horasTrabalhadas = get_number("Digite o número de horas trabalhadas:");
    const numeroDependentes = get_number("Digite o número de dependentes:");

    const salarioBruto = horasTrabalhadas * valorHoraTrabalhada + numeroDependentes * valorPorDependente;

    const descontoINSS = salarioBruto * taxaINSS;
    const descontoIR = salarioBruto * taxaIR;

    const salarioLiquido = salarioBruto - descontoINSS - descontoIR;

    print(`Código do Funcionário: ${codigoFuncionario}`);
    print(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    print(`Desconto INSS: R$ ${descontoINSS.toFixed(2)}`);
    print(`Desconto IR: R$ ${descontoIR.toFixed(2)}`);
    print(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
    print(""); // Linha em branco para separar os resultados

    contador++;
  }
}

calcularSalarioLiquido();