#include <stdio.h>

int main(){
    int x = 10;
    int *p = &x;

    printf("%d\n", *p);
    *p = 20;

    printf("%d\n", *p);

    return 0;
}