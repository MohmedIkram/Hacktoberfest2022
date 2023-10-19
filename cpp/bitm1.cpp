#include<iostream>
using namespace std;

int getbit(int n,int pos){
    return (n & (1<<pos)!=0);
}

int setbit(int n,int pos){
    return (n | (1<<pos));
}

int clearbit(int n,int pos)
{
    return (n & ~(1<<pos));
}

int updatebit(int n,int pos,int x)
{
    int y=~(1<<pos);
    n= n & y;
    return (n | (x<<pos));
}

int main()
{
    cout<<getbit(5,2);
    // cout<<setbit(5,1);
    // cout<<clearbit(5,2);
    // cout<<updatebit(5,1,1);

    return 0;
}