#include<iostream>

using namespace std;

void Swap(int *a,int *b)
{
    int t;
    t=*a;
    *a=*b;
    *b=t;
}

int Partition(int arr[],int l,int h)
{
    int pivot,i,j;
    pivot=arr[l],i=l,j=h;

    while(i<j)
    {
        do
        {
            i++;
        }while(arr[i]<=pivot);

        do
        {
            j--;
        }while(arr[j]>pivot);
        if(i<j)
            Swap(&arr[i],&arr[j]);
    }
    Swap(&arr[l],&arr[j]);
    return j;
}

void QuickSort(int arr[],int l,int h)
{
    int loc;
    if(l<h)
    {
        loc=Partition(arr,l,h);
        QuickSort(arr,l,loc);
        QuickSort(arr,loc+1,h);
    }


}

void Printarray(int arr[],int n)
{
    int i;
    for(i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}

int main()
{
    int n,i,l,h;
    cout<<"Enter no of array elements : "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the array elements"<<endl;
    for(i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    QuickSort(arr,0,n);
    cout<<"Sorted Array :"<<endl;
    Printarray(arr,n);

}
