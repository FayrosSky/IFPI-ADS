class Saudacao {
	nome: string;

	constructor(nome: string) {
		this.nome = nome;
	}

	cumprimentar() {
		console.log(`Olá, ${this.nome}!`);
	}
}

//Criando uma instância da classe Saudacao
const pessoa = new Saudacao('João');

//Chamando o método cumprimentar da instância 
pessoa.cumprimentar();


