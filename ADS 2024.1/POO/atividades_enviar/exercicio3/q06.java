public static void exibir(String... messages) {
    for (String message : messages) {
        System.out.println(message);
    }
}

public static void main(String[] args) {
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}