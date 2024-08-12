public static String arrayParaString(int[] numeros) {
    StringBuilder resultado = new StringBuilder();

    for (int i = 0; i < numeros.length; i++) {
        resultado.append(numeros[i]);
        if (i < numeros.length - 1) {
            resultado.append("-");
        }
    }

    return resultado.toString();
}

public static void main(String[] args) {
    int[] meuArray = {1, 2, 3, 4, 5};
    String stringResultado = arrayParaString(meuArray);
    System.out.println(stringResultado); // Saída: 1-2-3-4-5
}