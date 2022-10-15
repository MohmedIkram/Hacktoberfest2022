#include<stdio.h>
#include<conio.h>
void bubble(int a[],int n);
void binary(int a[],int n,int s);
void main()
{
	int a[10],i,n,s;
	clrscr();
	printf("Enter array size:\n");
	scanf("%d",&n);
	printf("Enter array elements:\n");
	for(i=0;i<n;i++)
	{
		scanf("%d",&a[i]);
	}
	printf("Array elements are:\n");
	for(i=0;i<n;i++)
	{
		printf("%d\t",a[i]);
	}
	printf("\nEnter element to search:\n");
	scanf("%d",&s);
	bubble(a,n);
	binary(a,n,s);
	getch();
}
void bubble(int a[],int n)
{
	int i,j,t;
	for(i=0;i<n-1;i++)
	{
		for(j=0;j<n-1-i;j++)
		{
			if(a[j]>a[j+1])
			{
				t=a[j];
				a[j]=a[j+1];
				a[j+1]=t;
			}
		}
	}
}
void binary(int a[],int n,int s)
{
	int beg,end,mid,loc;
	beg=0;
	end=n-1;
	mid=(beg+end)/2;
	while(a[mid]!=s && beg<=end)
	{
		if(a[mid]<s)
		beg=mid+1;
		else
		end=mid-1;
		mid=(beg+end)/2;
	}
	if(a[mid]==s)
	printf("%d is found at %d position",s,mid);
	else
	printf("%d is not found",s);
}