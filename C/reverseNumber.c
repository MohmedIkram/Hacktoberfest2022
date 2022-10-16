#include<stdio.h>

int main()	{
	int n, reverse = 0, res;
 
	printf("Enter a number: ");

	scanf("%d", &n);
	
		while(n != 0)	{
			 res = n % 10;
			 reverse = reverse * 10 + res;
			 n/=10;
		}
		
	printf("Reversed Number: %d", reverse);
	return 0;
}
