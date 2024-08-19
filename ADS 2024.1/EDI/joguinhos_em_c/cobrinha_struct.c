// Estrutura para a cobra
struct Snake {
    int x[MAX_SNAKE_SIZE]; // Posições x das partes da cobra
    int y[MAX_SNAKE_SIZE]; // Posições y das partes da cobra
    int size;              // Tamanho atual da cobra
    enum Direction dir;    // Direção atual da cobra
};

// Estrutura para a comida
struct Food {
    int x; // Posição x da comida
    int y; // Posição y da comida
};