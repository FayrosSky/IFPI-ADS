import 'dart:svg';

void main() {
  boasvindas();
  //print(somador(10, 30));
  //print(calcArea(10));
  //print(calcArea2(10));
  //print(atividade01(10, 20));
  //roupas("sapato", "Preto", 36.0);
  //roupas_opcionais("sapato", cor: "azul", tamanho: 35.0);
  //roupas_default("sapato", cor: "amaralho", tamanho: 38.0);
  pet_shop("girafa", "pluto");
}

/*
em dart:
{
  intruções;
  retorno_da_dun

}

*/
void boasvindas() {
  print('Sejam bem-vindos ao sistema!');
}

int somador(int valor1, int valor2) {
  int res = valor1 + valor2;
  return res;
}

double calcArea(double raio) {
  double circo = 3.14 * raio * raio;
  return circo;
}

double calcArea2(double raio) => 3.14 * raio * raio;

atividade01(base, altura) {
  int area = base * altura;
  return area;
}

/*
atividade02() {
  int primeiro = 1;
  int segundo = 2;
  int terceiro = 3;

  if (primeiro > && (segundo > terceiro)) {
    return primeiro;
  } else if (segundo > primeiro > terceiro) {
    return segundo;
  } else {
    return terceiro;
  }
}

*/

void roupas(String texto, String cor, double tamanho) {
  print(texto);
  print(cor ?? "Azul");
  print(tamanho ?? 10.0);
}

//parêmtro obrigatorios sempre vem antes dos opcionais
void roupas_opcionais(String texto, {String? cor, double? tamanho}) {
  print(texto);
  print(cor ?? "Azul");
  print(tamanho ?? 10.0);
}

//Todos os parâmetros que estiverem entre chaves serão opcionais. Sò que tem um detalhe lá na chamada de função temos que chamar na chamada de função e passar o tipo de dado.

void roupas_default(String texto, {String? cor, double? tamanho}) {
  print(texto);
  print(cor ?? "Azul");
  print(tamanho ?? 10.0);
}

void pet_shop(String texto, String animal,
    {String? nome, String? raca, int? idade}) {
  print("Bemvindo ao Petshop!");
  print("Seu bichinho é um: ");
  print(animal ?? "cachorro");
  print("Seu nome é: ");
  print(nome ?? "totó");
  print("A raça do bichinho é:");
  print(raca ?? "doberman");
  print("Sua idade: ");
  print(idade ?? idade);
}

/*

class Pessoa(){
  String nome; int idade; double altura;
}
void main(){
  Pessoa pessoa1 = Pessoa();
  pessoa1.nome = 'Pedro'
}

 */
