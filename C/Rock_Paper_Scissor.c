#include <stdio.h>
#include <stdlib.h>
// to make the random number generator function accessible
// srand(time(0))
#include <time.h>
// to use sleep() this library is needed
#include <windows.h>

// creating a function to make decision to print the result
// return 0 -> if game draws
// return 1 -> if game won
// return -1 -> if game lose
// total 9 cases are there

int RockPaperScissor(char c, char comp)
{
    // the case when use enters something else instead of 'r' 'p' 's'
    if (c != 'r' && c != 'p' && c != 's')
    {
        printf("Wrong Choice!\n");
    }

    // the case where both user and the computer have same choice
    // rr pp ss
    if (c == comp)
    {
        return 0;
    }

    // and other six cases would be rp rs sp sr ps pr
    if (c == 'r' && comp == 'p')
    {
        return -1;
    }
    else if (c == 'r' && comp == 's')
    {
        return 1;
    }

    if (c == 's' && comp == 'p')
    {
        return 1;
    }
    else if (c == 's' && comp == 'r')
    {
        return -1;
    }

    if (c == 'p' && comp == 's')
    {
        return -1;
    }
    else if (c == 'p' && comp == 'r')
    {
        return 1;
    }
}

// driver code
int main()
{
    // declearing c for user input and comp for computer
    char c, comp;
    // choice for switch statements
    int choice;
    // d for sleep() function to pause for 1 sec
    int d = 1;

    // for continuosly running the program till the user ends it him/herself
    while (1)
    {
        // for generating a random number from 1 to 3
        // by dividing any no. by "n" and adding 1 to its
        // remainder always return a no in that range
        srand(time(0));
        int number = rand() % 3 + 1;
        // printf("%d\n", number);

        printf("\n\n\n");

        printf("1. Play the game\n");
        printf("2. Exit\n");

        scanf("%d", &choice);
        fflush(stdin);

        // using switch to select diff choices in switch statements
        switch (choice)
        {

            // the main case
        case 1:
            // to provide the random number to choose the choice for computer
            if (number == 1)
            {
                comp = 'r';
            }
            else if (number == 2)
            {
                comp = 'p';
            }
            else
            {
                comp = 's';
            }

            // comp = 's'; in starting I used a fixed choice for comp
            printf("Enter your choice:\n");
            printf("(r for 'rock', p for 'paper', s for 'scissor')\n");
            // for inputting users choice
            scanf("%c", &c);
            fflush(stdin); // to clean the buffer
            // storing the value of decision to result variable
            int result = RockPaperScissor(c, comp);
            // using Loading... for 1 second for giving game some realism
            if (c == 'r' || c == 'p' || c == 's')
            {
                printf("Loading...\n");
                sleep(d);
            }
            // for clearing the screen
            system("cls");
            printf("\n\n\n");

            // to show final output or result to the user
            if (result == 0)
            {
                printf("Game Draw!\n");
            }
            else if (result == 1)
            {
                printf("You Won!\n");
            }
            else if (result == -1)
            {
                printf("You Lose!\n");
            }
            if (c == 'r' || c == 'p' || c == 's')
            {
                printf("You chose: '%c' and Computer chose: '%c'\n\n", c, comp);
            }

            break;

        // the case to exit the game when pressing 2
        case 2:
            printf("The program succesfully exited\n\n");
            exit(0);
            break;

        default: // if anything other than 1 or 2 is entered this case prints wrong choice
            printf("Wrong choice!\n");
        }
        // using getchar function to stop the program from directly exiting
        printf("Press ENTER key to continue...\n");
        getchar();
        printf("\n");

        system("cls");
    }

    return 0;
}
