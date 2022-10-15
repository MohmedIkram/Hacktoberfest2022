/*C program for TIC  TAC TOE game.*/

#include <stdio.h>
#include <stdlib.h>

/*print matrix*/
void printMatrix(char val);
/*update value in matrix*/
void insertValue(int i, int j, unsigned char user);
/*check matrix is full or not*/
unsigned char isFull(void);
/*check game is completed or not.*/
unsigned char isOver(void);

unsigned char mat[3][3] = { '_', '_', '_', '_', '_', '_', '_', '_', '_' };
unsigned char usertern = 0;
unsigned char onlyOnce = 0;

int main()
{
    unsigned char user1[30], user2[30], winner;
    int ival, jval;

    printf("\nEnter name of user1 :");
    gets(user1);
    fflush(stdin);

    printf("Enter name of user2 :");
    gets(user2);
    fflush(stdin);

again:
    system("clear");
    printf("\n\n\n\n");
    if (!onlyOnce) {
        printMatrix(0);
        onlyOnce = 1;
    }
    else {
        printMatrix(1);
    }
    winner = isOver();

    if (winner) {
        printf("\n *** Congratulations Dear %s ,\n     You have won the game . !!!!", ((winner == 'X') ? user1 : user2));
        goto end;
    }

    if (!isFull()) {
        printf("\n *** Game Over .");
        goto end;
    }

repeat:
    fflush(stdin);
    printf("\n *** %s , Enter value (00-22) seperated by space :", (usertern == 0x00 ? user1 : user2));
    scanf("%d%d", &ival, &jval);
    if ((ival > 2 || ival < 0) || (jval > 2 || jval < 0)) {
        printf("\n *** ERROR : Invalid index, try again !!!");
        goto repeat;
    }
    if (mat[ival][jval] != '_') {
        printf("\n *** ERROR : Already filled,try again !!!");
        goto repeat;
    }
    insertValue(ival, jval, usertern);
    usertern = !usertern;
    goto again;

end:
    printf("\n");
    return 0;
}

void printMatrix(char val)
{
    unsigned char i, j;
    if (!val) {
        /*For blank matrix*/

        for (i = 0; i < 3; i++) {
            printf("\t\t\t");
            for (j = 0; j < 3; j++) {
                printf("[%3c ] ", mat[i][j]);
            }
            printf("\n");
        }

        return;
    }
    for (i = 0; i < 3; i++) {
        printf("\t\t\t");
        for (j = 0; j < 3; j++) {
            printf("[%3c ] ", mat[i][j]);
        }
        printf("\n");
    }
    return;
}

void insertValue(int i, int j, unsigned char user)
{
    //  printf("\n ##### %d, %d ###\n",i,j);
    mat[i][j] = ((user == 0x00) ? 'X' : 'O');
}

unsigned char isFull(void)
{
    unsigned char i, j, count = 0;
    ;
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++) {
            if (mat[i][j] == '_')
                ++count;
        }
    return count;
}

unsigned char isOver(void)
{

    unsigned char i, j, user;
    unsigned char storeChar = 0, flag;
    int sum = 0;
    // case 1
    /*sum of 'X'+'X'+'X' = 264 and sum of 'O'+'O'+'O' =237*/
    flag = 0;
    for (i = 0; i < 3; i++) {
        sum = 0;
        for (j = 0; j < 3; j++) {
            if (mat[i][j] == '_')
                break;
            sum += mat[i][j];
            storeChar = mat[i][j];
        }

        if (sum == 237 || sum == 264) {
            return storeChar;
        }
    }

    // case 2
    for (i = 0; i < 3; i++) {
        sum = 0;
        for (j = 0; j < 3; j++) {
            if (mat[j][i] == '_')
                break;
            sum += mat[j][i];
            storeChar = mat[j][i];
        }

        if (sum == 237 || sum == 264) {
            return storeChar;
        }
    }

    // case 3

    for (i = 0; i < 3; i++) {
        sum = 0;
        for (j = 0; j < 3; j++) {
            if (i == j) {
                if (mat[i][j] == '_')
                    break;
                sum += mat[i][j];
                storeChar = mat[i][j];
            }
        }
        if (sum == 237 || sum == 264) {
            return storeChar;
        }
    }

    return 0;
}
