#define _CRT_SECURE_NO_WARNINGS

#include<stdio.h>

int main()
{
	int num1;
	int num2;
	int digit1;
	int digit2;
	int sum = 0;
	int rem = 0;
	int res = 0;
	int multiplier = 1;
	int totAdd = 0;
	
	printf("Enter First number: ");
	scanf("%d", &num1);
	while (num1 <= 0)
	{
		printf("Invalid Input!\nEnter First number Again: ");
		scanf("%d", &num1);
	}
	int numc1 = num1;

	printf("Enter Second number: ");
	scanf("%d", &num2);
	while (num2 <= 0)
	{
		printf("Invalid Input!\nEnter Second number Again: ");
		scanf("%d", &num2);
	}
	int numc2 = num2;


	
	while (num1 > 0 || num2 > 0)
	{
		digit1 = num1 % 10;
		num1 = num1 / 10;

		digit2 = num2 % 10;
		num2 = num2 / 10;

		sum = rem + (digit1 + digit2);
		rem = sum / 10;


		res = sum % 10;
		res = res * multiplier;
		totAdd = totAdd + res;
		multiplier = multiplier * 10;

	}

	printf("    %d\n", numc1);
	printf("+   %d\n", numc2);
	printf("  ---------\n");
	printf("    %d", totAdd);


	return 0;
}