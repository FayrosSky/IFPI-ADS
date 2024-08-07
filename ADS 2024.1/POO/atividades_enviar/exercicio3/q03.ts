function cumprimentarPessoa(nome: string, tratamento: string = "Sr."): void {
    console.log(`${tratamento}. ${nome}`);
}


cumprimentarPessoa("Sávia"); // Saída: Sr. Sávia
cumprimentarPessoa("João", "Dr."); // Saída: Dr. João