#include <stdio.h>

int main() {
    int num;
    
    printf("Enter an integer number: ");
    scanf("%d", &num);

    // even is num can divisible with 2
    if(num % 2 == 0)
        printf("%d is even number\n", num);
    else
        printf("%d is odd number\n", num);
    
    return 0;
}
