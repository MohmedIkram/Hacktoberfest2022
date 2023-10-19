#include <bits/stdc++.h>
using namespace std;

void selectionsort(int arr[],int n){
    int min,temp;
    for (int i = 0; i < n; i++)
    {
       min=i;
       for (int j = i; j < n; j++)
       {
        if (arr[min]>arr[j])
        {
            min=j;
        }
        
       }
       temp=arr[i];
       arr[i]=arr[min];
       arr[min]=temp; 
    }
    

}

void printarray(int arr[],int n){
    for (int i = 0; i <n; i++)
    {
        cout<<arr[i]<<' ';
    }
    cout<<endl;
}



int main(){
    int arr[]={6,2,3,45,6,3,2,1};
    printarray(arr,8);
    selectionsort(arr,8);
    printarray(arr,8);
    return 0;
}