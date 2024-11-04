void main() {
  //demonstracao_for();
  //atividade_for1();
  //atividade_for_treino();
  //atividade_while_treino1();
  //atividade_do_while1();
  atividade_pares_impares();
}

//atividade_switch case
/*



void atv_calculadora(valor1, valor2){
  double 
  switch(operacao){
    case soma:
      resultado = valor1 + valor2;
      break;
    case subtracao:
      resultado = valor1 - valor2;
      break;
    case multiplicacao:
      resultado = valor1 * valor2;
      break;
    case divisao:
      resultado = valor1/valor2;
      break;
  }
};

*/

//atividade demonstração for
void demonstracao_for() {
  int contador; //variavel de controle do loop
  for (contador = 1; contador <= 10; contador++) {
    print('$contador');
  }
}

void atividade_for1() {
  int contador; //variavel de controle do loop
  for (contador = 10; contador >= 1; contador--) {
    print('$contador');
  }
}

void atividade_for_treino() {
  int contador;
  for (contador = 1; contador <= 5; contador++) {
    print('$contador');
  }
  for (contador = 5; contador >= 1; contador--) {
    print('$contador');
  }
}

void atividade_while_treino1() {
  var salario = 1000;
  while (salario < 5000) {
    salario += 100;
    print("Meu salário AINDA é de = R\$$salario");
  }
}

void atividade_do_while1() {
  int i = 5;
  do {
    print("dart");
    i--;
  } while (i >= 1);
}

void atividade_pares_impares() {
  int max = 10;

  print("Numero iniciado foi $max");

  print("Contagem dos pares:");
  for (int contador = 1; contador <= max; contador++) {
    if (contador % 2 == 0) {
      print("$contador");
    }
  }
  print("Contade dos impares:");
  for (int contador = 1; contador <= max; contador++) {
    if (contador % 2 != 0) {
      print("$contador");
    }
  }
}
