#include<iostream.h>
#include<stdio.h>

void *update(int,int);

using namespace std;

void update(int *a,int *b)
{
    int sum,diff; 
    sum=*a+*b;
    diff=*a-*b;
    cout<<sum<<"\n"<<abs(diff);
}

int main() 
{
    int a, b;
    int *pa = &a, *pb = &b;
    cin>>a>>b;
    update(pa,pb);
    return 0;
}
