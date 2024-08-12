public static double soma(double x, Double y) {
    return x + y;
}

public static void main(String[] args) {
    // a. console.log(soma(1, 2));
    System.out.println(soma(1, 2.0)); // Saída: 3.0

    // b. console.log(soma(1, "2"));
    System.out.println(soma(1, 2.0)); // Saída: 3.0

    // c. console.log(soma(1));
    System.out.println(soma(1, null)); // Saída: 1.0
}