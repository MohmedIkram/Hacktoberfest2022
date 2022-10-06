#include<iostream>
using namespace std;
int partition(int a[],int l,int h)
{
    int i=l,j=h+1,pivot;
    pivot=a[l];
    while(i<=j)
    {
        do{
            i++;
        }while(a[i]<=pivot);
        do{
            j--;
        }while(a[j]>pivot);
        if(i<j){
            swap(a[i],a[j]);
        }
    }
    swap(a[l],a[j]);
   
    return j;
}
void quicksort(int a[],int l,int h)
{    if(l<h){
        int t=partition(a,l,h);
        quicksort(a,l,t-1);
        quicksort(a,t+1,h);  
    }
}
void swap(int &x,int &y)
{
    int t;t=x;x=y;y=t;
}
int main()
{
    int i,n;
    cout<<"Enter the number of elements:- ";
    cin>>n;
    int a[n];
    cout<<"Enter the Array elements:- ";
    for(i=0;i<n;i++)
        cin>>a[i];
    quicksort(a,0,n-1);
    cout<<"After sorting:- ";
    for(i=0;i<n;i++)
        cout<<a[i]<<" ";
  
    cout<<endl;
    return 0;
}