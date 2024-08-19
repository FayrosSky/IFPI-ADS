void initialize(struct Snake* snake, struct Food* food) {
    snake->size = 1; // Começa com um segmento
    snake->x[0] = WIDTH / 2; // Posição inicial da cobra
    snake->y[0] = HEIGHT / 2;
    snake->dir = STOP; // Inicialmente parada

    // Gera a comida em uma posição aleatória
    food->x = rand() % WIDTH;
    food->y = rand() % HEIGHT;
}

void draw(struct Snake snake, struct Food food) {
    system("cls"); // Limpa a tela (Windows)
    
    for (int i = 0; i < HEIGHT + 2; i++) {
        for (int j = 0; j < WIDTH + 2; j++) {
            if (i == 0 || i == HEIGHT + 1 || j == 0 || j == WIDTH + 1) {
                printf("#"); // Bordas
            } else if (i == food.y + 1 && j == food.x + 1) {
                printf("F"); // Comida
            } else {
                int isSnakePart = 0;
                for (int k = 0; k < snake.size; k++) {
                    if (snake.x[k] == j - 1 && snake.y[k] == i - 1) {
                        printf("O"); // Parte da cobra
                        isSnakePart = 1;
                        break;
                    }
                }
                if (!isSnakePart) {
                    printf(" "); // Espaço vazio
                }
            }
        }
        printf("\n");
    }
}


void move(struct Snake* snake, struct Food* food) {
    int prevX = snake->x[0];
    int prevY = snake->y[0];
    int prev2X, prev2Y;
    snake->x[0] += (snake->dir == RIGHT) ? 1 : (snake->dir == LEFT) ? -1 : 0;
    snake->y[0] += (snake->dir == DOWN) ? 1 : (snake->dir == UP) ? -1 : 0;

    for (int i = 1; i < snake->size; i++) {
        prev2X = snake->x[i];
        prev2Y = snake->y[i];
        snake->x[i] = prevX;
        snake->y[i] = prevY;
        prevX = prev2X;
        prevY = prev2Y;
    }

    // Verifica se a cobra comeu a comida
    if (snake->x[0] == food->x && snake->y[0] == food->y) {
        snake->size++;
        food->x = rand() % WIDTH;
        food->y = rand() % HEIGHT;
    }
}