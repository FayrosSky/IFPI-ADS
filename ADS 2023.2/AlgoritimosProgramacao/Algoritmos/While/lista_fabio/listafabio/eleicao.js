import { get_number, print } from "../../utils/input.js";

function calcularResultadoEleicao() {
  let n = get_number("Quantos eleitores votaram?");
  let contador = 0;
  let votosCandidato1 = 0;
  let votosCandidato2 = 0;
  let votosCandidato3 = 0;
  let votosNulos = 0;
  let votosEmBranco = 0;

  while (contador < n) {
    const voto = get_number(
      "Digite o código do voto (1 para Candidato 1, 2 para Candidato 2, 3 para Candidato 3, 9 para Nulo, 0 para Branco):"
    );

    if (voto === 1) {
      votosCandidato1++;
    } else if (voto === 2) {
      votosCandidato2++;
    } else if (voto === 3) {
      votosCandidato3++;
    } else if (voto === 9) {
      votosNulos++;
    } else if (voto === 0) {
      votosEmBranco++;
    } else {
      print("Voto inválido. Por favor, digite um código válido.");
      continue; // Volte para o início do loop para solicitar um novo voto
    }

    contador++;
  }

  const totalVotosCandidato1 = votosCandidato1;
  const totalVotosCandidato2 = votosCandidato2;
  const totalVotosCandidato3 = votosCandidato3;
  const totalVotosNulos = votosNulos;
  const totalVotosEmBranco = votosEmBranco;

  let vencedor = "Nenhum candidato"; // Inicialmente, consideramos que nenhum candidato venceu

  if (
    votosCandidato1 > votosCandidato2 &&
    votosCandidato1 > votosCandidato3
  ) {
    vencedor = "Candidato 1";
  } else if (
    votosCandidato2 > votosCandidato1 &&
    votosCandidato2 > votosCandidato3
  ) {
    vencedor = "Candidato 2";
  } else if (
    votosCandidato3 > votosCandidato1 &&
    votosCandidato3 > votosCandidato2
  ) {
    vencedor = "Candidato 3";
  }

  print(`Total de votos para Candidato 1: ${totalVotosCandidato1}`);
  print(`Total de votos para Candidato 2: ${totalVotosCandidato2}`);
  print(`Total de votos para Candidato 3: ${totalVotosCandidato3}`);
  print(`Total de votos nulos: ${totalVotosNulos}`);
  print(`Total de votos em branco: ${totalVotosEmBranco}`);
  print(`O vencedor da eleição foi: ${vencedor}`);
}

calcularResultadoEleicao();
