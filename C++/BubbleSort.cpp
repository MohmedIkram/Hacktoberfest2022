#include<iostream>
using namespace std;

int main(){

    int n;
    cin>>n;
    int arry[n];

    for (int i = 0; i < n; i++)
    {
        cin>>arry[i];
    }
    
    int counter=1;
    while (counter<n)
    {
        for (int i = 0; i < n-counter; i++)
        {
            if (arry[i]>arry[i+1])
            {
                int temp=arry[i];
                arry[i]=arry[i+1];
                arry[i+1]=temp;
            }
            
        }
        counter++;
    }
    
    for (int i = 0; i < n; i++)
    {
        cout<<arry[i]<<" ";
    }
    return 0;
    
}