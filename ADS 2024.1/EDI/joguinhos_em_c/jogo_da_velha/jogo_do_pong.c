#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <time.h>

#define SCREEN_WIDTH 40
#define SCREEN_HEIGHT 20
#define PADDLE_HEIGHT 4
#define BALL_SPEED 2

int paddleLeft = SCREEN_HEIGHT / 2 - PADDLE_HEIGHT / 2;
int paddleRight = SCREEN_HEIGHT / 2 - PADDLE_HEIGHT / 2;
int ballX = SCREEN_WIDTH / 2;
int ballY = SCREEN_HEIGHT / 2;
int ballDirX = -BALL_SPEED;
int ballDirY = 0;
int scoreLeft = 0;
int scoreRight = 0;

void drawScreen() {
    system("clear");
    printf("+");
    for (int i = 0; i < SCREEN_WIDTH - 2; i++) {
        printf("-");
    }
    printf("+\n");

    for (int i = 0; i < SCREEN_HEIGHT; i++) {
        printf("|");
        for (int j = 0; j < SCREEN_WIDTH - 2; j++) {
            if (i == paddleLeft || i == paddleLeft + 1 || i == paddleLeft + 2 || i == paddleLeft + 3) {
                printf("#");
            } else if (i == paddleRight || i == paddleRight + 1 || i == paddleRight + 2 || i == paddleRight + 3) {
                printf("#");
            } else if (i == ballY && j == ballX) {
                printf("O");
            } else {
                printf(" ");
            }
        }
        printf("|\n");
    }

    printf("+");
    for (int i = 0; i < SCREEN_WIDTH - 2; i++) {
        printf("-");
    }
    printf("+\n");

    printf("Score: %d - %d\n", scoreLeft, scoreRight);
}

void moveBall() {
    ballX += ballDirX;
    ballY += ballDirY;

    if (ballY <= 0 || ballY >= SCREEN_HEIGHT - 1) {
        ballDirY *= -1;
    }

    if (ballX <= 1) {
        if (ballY >= paddleLeft && ballY <= paddleLeft + PADDLE_HEIGHT - 1) {
            ballDirX *= -1;
        } else {
            scoreRight++;
            ballX = SCREEN_WIDTH / 2;
            ballY = SCREEN_HEIGHT / 2;
            ballDirX = -ballDirX;
        }
    }

    if (ballX >= SCREEN_WIDTH - 2) {
        if (ballY >= paddleRight && ballY <= paddleRight + PADDLE_HEIGHT - 1) {
            ballDirX *= -1;
        } else {
            scoreLeft++;
            ballX = SCREEN_WIDTH / 2;
            ballY = SCREEN_HEIGHT / 2;
            ballDirX = -ballDirX;
        }
    }
}

void moveAI() {
    if (paddleRight < ballY - 1) {
        paddleRight++;
    } else if (paddleRight > ballY) {
        paddleRight--;
    }
}

int main() {
    srand(time(NULL));
    while (1) {
        drawScreen();
        moveBall();
        moveAI();
        usleep(50000);
    }
    return 0;
}