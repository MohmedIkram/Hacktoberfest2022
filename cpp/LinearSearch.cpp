// Program for Linear Search using Functions 

#include<iostream>
using namespace std;

int LinearSearch(int A[],int n,int key)
{   
    int i;
    for( i=0;i<n;i++)
    {
      if(key==A[i])
      {
       cout<<"Element found at index : "<<i<<endl;
       return 0;
      }
    }
    

 
    if(i==n)
    {
    cout<<"Element not Found";
     return 0;
    }
    
}

int main()
{
 int num,k;
 cout<<"Enter the number of Elements in Array: ";
 cin>>num;
 int A[num];
 cout<<"Enter " << num << " elements of Array: ";
 
 for(int i=0;i<num;i++)
 {
    cin>>A[i];
 }
 
 cout<<"Enter an Element to be Searched: ";
 cin>>k;
 int index=LinearSearch(A,num,k);
 
 
 
 
}