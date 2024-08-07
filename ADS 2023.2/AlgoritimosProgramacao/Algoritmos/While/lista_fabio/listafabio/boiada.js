import { get_number, get_text, print } from "../../utils/input.js";

function encontrarBoiMaisMagroGordo() {
  let boiMaisMagro = null;
  let boiMaisGordo = null;

  let n = get_number("Quantas fichas de boi deseja inserir?");
  let contador = 0;

  while (contador < n) {
    const numeroIdentificacao = get_text("Digite o número de identificação do boi:");
    const nomeBoi = get_text("Digite o nome do boi:");
    const pesoBoi = get_number("Digite o peso do boi em kg:");

    if (boiMaisMagro === null || pesoBoi < boiMaisMagro.peso) {
      boiMaisMagro = { numeroIdentificacao, pesoBoi };
    }

    if (boiMaisGordo === null || pesoBoi > boiMaisGordo.peso) {
      boiMaisGordo = { numeroIdentificacao, pesoBoi };
    }

    contador++;
  }

  print("Boi mais magro:");
  print(`Número de Identificação: ${boiMaisMagro.numeroIdentificacao}, Peso: ${boiMaisMagro.peso} kg`);

  print("Boi mais gordo:");
  print(`Número de Identificação: ${boiMaisGordo.numeroIdentificacao}, Peso: ${boiMaisGordo.peso} kg`);
}

encontrarBoiMaisMagroGordo();
