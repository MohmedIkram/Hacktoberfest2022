#include<iostream>
using namespace std;
int main(){
    int arr[50],n,i,pos,num;
    cout<<"Enter the size of an array"<<endl;
    cin>>n;
    cout<<"Enter the element"<<endl;
    for(i=0;i<n;i++){   
        cin>>arr[i];
    }
   cout<<"Enter the element to insert and the position"<<endl;
   cin>>num>>pos;
   for(i=n+1;i>pos;i--){
    arr[i]=arr[i-1];
   }
   arr[pos]=num;
   cout<<"New array is ";
   for(i=0;i<n+1;i++){
    cout<<arr[i]<<" ";
   }
   return 0;
}