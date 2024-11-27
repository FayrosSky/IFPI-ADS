void main() {}

class Animal {
  String nome;
  double peso;
  Animal(this.nome, this.peso);
}

class Cachorro extends Animal {
  String late;
}
Cachorro(String  nome, double peso, this.late): super(nome, peso);}
class Gato extends Animal{
  String
}