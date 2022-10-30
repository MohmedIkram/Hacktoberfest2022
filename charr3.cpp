#include<iostream>
using namespace std;

int main()
{
    //check palindrone
    int n;
    cin>>n;
    char arr[n+1];
    cin>>arr;
    
    bool check=true;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] != arr[n-i-1])
        {
            check=0;
            break;
        }  
    }
    if(check==1)
        cout<<"It is a palindrone.";
    else
        cout<<"It is not a palindrone.";
    
    return 0;
}