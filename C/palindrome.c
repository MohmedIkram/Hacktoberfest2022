#include <stdio.h>
#include <conio.h>

int reverse(int num);
int isPalindrome(int num);

int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    if(isPalindrome(num) == 1)
    {
        printf("the given number is a palindrome");
    }
    else
    {
        printf("the given number is not a palindrome number");
    }
    return 0;
    }

int isPalindrome(int num)
{
    if(num == reverse(num))
    {
        return 1;
    }
    return 0;
}


int reverse(int num)
{
    int rem;
    static int sum=0;
    if(num!=0){
            rem=num%10;
            sum=sum*10+rem;
            reverse(num/10);
    }
        else
            return sum;
    return sum;
} 
