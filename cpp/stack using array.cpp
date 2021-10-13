#include<stdio.h>
#include <stdlib.h>
#include<conio.h>


class STACK 
{
	int data[10];
	int top;
	public:
		STACK()
		{
			top=-1;
		}
		void Check();
		void Push();
		void Pop();
		void Display();
};

void STACK::Check()
{
	if(top==-1)
	{
		printf("Stack empty.");
	}
	else
	{
		printf("Stack not empty");
	}
}

void STACK::Push()
{
	if (top==9)
	{
		printf("Stack full.");
		return;
	}
	++top;
	printf("Enter data:");
	scanf("%d", &data[top]);
	printf("Record Added.");
}

void STACK::Pop()
{
	if(top==-1)
	{
		printf("Stack empty");
		return ;
	}
	printf("Node to delete:\nData-> %d\n", data[top]);
	--top;
	printf("\nNode deleted.");
}

void STACK::Display()
{
	if(top==-1)
	{
		printf("Stack is empty.");
		return;
	}
	printf("Stack elements are:\n");
	for(int i=top; i>=0; --i)
	{
		printf("%d\n", data[i]);
	}
}

int main()
{
	int ch=0;
	STACK S;
	while(ch!=5)
	{
		printf("\n\n***Menu***\n");
		printf("1.	Check if stack is empty.\n");
		printf("2.	Push\n");
		printf("3.	Pop\n");
		printf("4.	Display\n");
		printf("5.	Exit\n");

		printf("\nEnter your choice:");
		scanf("%d", &ch);

		switch(ch)
		{
			case 1:
				S.Check();
				printf("\nHit any key to continue...\n");
				getch();
				system("cls");
				break;
			case 2:
				S.Push();
				printf("\nHit any key to continue...\n");
				getch();
				system("cls");
				break;
			case 3:
				S.Pop();
				printf("\nHit any key to continue...\n");
				getch();
				system("cls");
				break;
			case 4:
				S.Display();
				printf("\nHit any key to continue...\n");
				getch();
				system("cls");
				break;
			case 5:
				printf("\nProgram terminated.\n");				
				break;
			default:
				printf("\nWrong choice! Try again.\n");

		}
	}
	return 0;
}
