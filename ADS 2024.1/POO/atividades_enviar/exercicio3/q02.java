public static boolean ehPrimo(int num) {
    if (num <= 1) {
        return false;
    }

    for (int i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

System.out.println(ehPrimo(7)); // true
System.out.println(ehPrimo(12)); // false