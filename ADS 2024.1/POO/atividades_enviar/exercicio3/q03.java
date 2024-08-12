public static void cumprimentarPessoa(String nome, String tratamento) {
    if (tratamento == null) {
        tratamento = "Sr.";
    }
    System.out.println(tratamento + ". " + nome);
}

public static void main(String[] args) {
    cumprimentarPessoa("Sávia", null); // Saída: Sr. Sávia
    cumprimentarPessoa("João", "Dr."); // Saída: Dr. João
}