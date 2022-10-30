#include<iostream>
#include<cmath>
using namespace std;

void countsort(int arr[],int n)
{
    int k=arr[0];
    for(int i=0;i<n;i++) {
        k=max(k,arr[i]);
    }
    int count[10]={0};
    for(int i=0;i<n;i++) {
        count[arr[i]]++;
    }
    for(int i=1;i<=k;i++) {
        count[i]+=count[i-1];
    }
    int output[n];
    for(int i=n-1;i>=0;i--) {
        output[--count[arr[i]]]=arr[i];
    }
    for(int i=0;i<n;i++) {
        arr[i]=output[i];
    }
}

int main()
{
    int n;
    cout<<"Enter the number of elements. \n";
    cin>>n;
    int arr[n];
    cout<<"Enter the elements. \n";
    for(int i=0;i<n;i++) {
        cin>>arr[i];
    }
    countsort(arr,n);
    cout<<"Ans: \n";
    for(int i=0;i<n;i++) {
        cout<<arr[i]<<" ";
    }
    return 0;
}