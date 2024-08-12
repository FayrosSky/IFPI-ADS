function main(){
    let numero = 5;
    let paridade = (numero % 2 === 0) ? 'Par' : 'Ímpar'
    console.log(paridade)

    let estaLogado = true;
    let mensagem = estaLogado ? 'Bem-vindo' : 'Por favor, faça o login'
    console.log(mensagem)


}

main()