#include <stdio.h>
#include <stdlib.h>
#include <conio.h> // Para _kbhit() e _getch()
#include <time.h>  // Para rand()

#define WIDTH 20
#define HEIGHT 10
#define MAX_SNAKE_SIZE 100

// Direções da cobra
enum Direction { STOP = 0, LEFT, RIGHT, UP, DOWN };