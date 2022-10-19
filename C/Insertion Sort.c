/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
void is(int [],int);
int main()
{
    int i;
    int arr[]={65,14,9,45,80};
    printf("ARRAY BEFORE SORTING IS:\n");
    for(i=0;i<5;i++)
       printf("%d\t",arr[i]);
       
    is(arr,5);
    
    printf("\nARRAY AFTER SORTING IS:\n");
    for(i=0;i<5;i++)
       printf("%d\t",arr[i]);
       
    return 0;
}
void is(int a[],int size)
{
    int i,j,temp;
    for(i=1;i<size;i++)
    {
        temp=a[i];
        j=i-1;
        while(j>=0 && a[j]>temp)
        {
            a[j+1] = a[j];
               j--;
        }
        a[j+1] = temp;
    }
}