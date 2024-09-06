#include <stdio.h>
#include <string.h>
/*
    x = x + 3  e igual a: x += 3
    k = k * 4  e igual a: k *= 4
    j = j / 2  e igual a: j /= 2
    m = m % 5  e igual a: m %= 5

*/

void main(){
    float a = 6;
    //a = a + 2;
    a += 2;
    printf("O valor de a é %.2f\n", a);
    a /= 2;
    printf("O valor de a é %.2f\n", a);
    a = 5;
    a /= 2;
    printf("O valor de a é %.2f\n", a);




}
