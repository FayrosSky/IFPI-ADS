import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};

        List<Integer> pares = new ArrayList<>();
        for (int num : array) {
            if (num % 2 == 0) {
                pares.add(num);
            }
        }

        System.out.println(pares);
    }
}