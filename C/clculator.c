
 
#include <stdio.h>

int main()
{   
    printf("\n********TAPABRATA GOSWAMI********\n");

    int choose;

    printf("\nChoose any one of them. \n\n1. Normal Calculator, 2. Percentage Calculator (1 or 2 ) = ");

    scanf("%d", &choose);

    if (choose == 1)
    {
        printf("\nThis calculator ony for Intiger Number.\n");

        int a, b, sum;
        char opretor;

        printf("\nChoose a opretor(+,-,*,/) = ");
        scanf("%s", &opretor);

        printf("\nChoose your first number = ");
        scanf("%d", &a);

        printf("\nChoose your first number = ");
        scanf("%d", &b);

        switch (opretor)
        {
        case '+':
            sum = (a + b);
            printf("\nCalculation answer is = %d\n", sum);
            break;

        case '-':
            sum = (a - b);
            printf("\nCalculation answer is = %d\n", sum);
            break;

        case '*':
            sum = (a * b);
            printf("\nCalculation answer is = %d\n", sum);
            break;

        case '/':
            sum = (a / b);
            printf("\nCalculation answer is = %d\n", sum);
            break;

        default:
            printf("Something is worng....");
            break;
        }
    }

    else if (choose == 2)
    {
        int first_num, secon_num;
        int sum_per;

        printf("your total value =");
        scanf("%d", &first_num);

        printf("your obtained value =");
        scanf("%d", &secon_num);

        sum_per = ((secon_num * 100) / first_num);

        printf("Your Total percentage is = %d\n", sum_per);
    }
    else
    {
        printf("You are a fuck boy/Girl, Choose a write a number.\n");
    }

    return 0;
}
