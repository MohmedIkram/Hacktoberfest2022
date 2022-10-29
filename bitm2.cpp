#include<iostream>
using namespace std;

int power2(int n) 
{
    return (n && !(n & n-1));
}

int main()
{
    int n;
    cin>>n;
    cout<<power2(n);

    return 0;
}