#include <stdio.h>

void troca(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int main() {
  int x = 10, y = 20;
  troca(&x, &y);
  printf("x = %d, y = %d\n", x, y); // Imprime "x = 20, y = 10"
  return 0;
}