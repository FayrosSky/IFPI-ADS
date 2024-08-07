class Hotel {
    quantReservas: number;
    adicionarReserva(): void {
        quantReservas++;
    }
}




//Não, não haverá um problema de compilação nesse código, pois a variável quantReservas do tipo number será automaticamente inicializada com o valor 0 quando uma nova instância da classe Hotel for criada.
//Em TypeScript (e também em JavaScript), quando uma variável de tipo primitivo (como number, string, boolean, etc.) é declarada como uma propriedade de uma classe, ela é automaticamente inicializada com o valor padrão do seu tipo. No caso de number, o valor padrão é 0.
