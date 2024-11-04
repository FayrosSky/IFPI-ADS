void main() {
  //atv1();
  //atv2();
  //atv3();
  //atv4();
  //atv5();
  //atv6();
  //atv7();
  atv8();
}

void atv1() {
  Map roupas = {
    01: 'tenis',
    02: 'calca',
    03: 'blusa',
    04: 'cueca',
    05: 'calcinha'
  };

  print(roupas[01]);
}

void atv2() {
  List frutas = ["banana", "maca", "peira", "limao"];
  List precos = [1.0, 2.5, 3.0, 3.5];
  Map caixa = {};
  for (var i = 0; i < 4; i++) {
    caixa[frutas[i]] = precos[i];
  }

  print(caixa);
  print(0 == 0);
}

//condicionais:
void atv3() {
  if (true) {
    print('O if esta sendo executa');
  }
  print('Finalizou o programa');
}

void atv4() {
  if (false) {
    print('O if esta sendo executado');
  }
  print('Finalizou o programa');
}

//o tipo de dado var é em tempo de atribuição, ou seja, quando atribuimos um tipo ele será esse tipo daí por diante
void atv5() {
  var sexo = 'feminino';
  if (sexo == 'feminino ') {
    print("O sexo é feminino!");
  }
  print("Finalizou o programa");
}

void atv6() {
  var idade = 17;
  if (idade < 18) {
    print("Você é menor de idade! Você tem $idade anos.");
  }
  print("Finalizou o programa.");
}

//IFs aninhados
void atv7() {
  var idade = 17;
  if (idade < 18) {
    print("Você é menor de idade! Você tem $idade anos.");
  } else {
    print("Você maior de idade! Você tem $idade anos.");
  }
  print("Finalizou o programa.");
}

void atv8() {
  var x = 11;
  var y = 10;

  if (x > y) {
    print("x é o maior, possui $x e y é o menor, possui $y");
  } else {
    print("y é o maior, possui $y e x é o menor, possui $x");
  }
}
