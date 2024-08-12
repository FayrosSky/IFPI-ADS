import { get_number, print } from "../../utils/input";

function calcularEstatisticasPopulacao() {
  let n = get_number("Quantos habitantes deseja calcular as estatísticas?");
  let contador = 0;
  let totalSalario = 0;
  let totalFilhos = 0;
  let pessoasComSalarioAteMil = 0;

  while (contador < n) {
    const salario = get_number("Digite o salário do habitante (em R$):");
    const numeroFilhos = get_number("Digite o número de filhos do habitante:");

    totalSalario += salario;
    totalFilhos += numeroFilhos;

    if (salario <= 1000) {
      pessoasComSalarioAteMil++;
    }

    contador++;
  }

  const mediaSalario = totalSalario / n;
  const mediaFilhos = totalFilhos / n;
  const percentualSalarioAteMil = (pessoasComSalarioAteMil / n) * 100;

  print(`Média de salário da população: R$ ${mediaSalario.toFixed(2)}`);
  print(`Média de número de filhos: ${mediaFilhos.toFixed(2)}`);
  print(`Percentual de pessoas com salário até R$ 1.000,00: ${percentualSalarioAteMil.toFixed(2)}%`);
}

calcularEstatisticasPopulacao();