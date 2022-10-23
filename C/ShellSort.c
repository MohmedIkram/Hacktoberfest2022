#include <stdio.h>

void swap(int *x,int *y)

{

    int temp=*x;

    *x=*y;

    *y=temp;

}

void shellsort(int arr[],int n)

{

    int gap,i,j;

    for(gap=n/2;gap>=1;gap=gap/2)

    {

        for(j=gap;j<n;j++)

        {

            for(i=j-gap;i>=0;i=i-gap)

            {

                if(arr[i+gap]>arr[i])

                {

                    break;

                }

                else

                {

                    swap(&arr[i+gap],&arr[i]);

                }

            }

        }

    }

}

int main (void)

{

   int i;

    int arr[]={3,7,9,10,12,6,5,2,1,18};

    int n=10;

    shellsort(arr,n);

    printf("After Sorting...\n");

    

    for(i=0;i<n;i++)

    {

        printf(" %d ",arr[i]);

    }

}
