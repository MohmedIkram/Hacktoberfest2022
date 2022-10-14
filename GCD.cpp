#include<iostream>
using namespace std;

int GCD(int, int);

int main(){
    int y, x;

    cout<<"Enter the two numbers: ";
    cin>>x>>y;

    cout<<"GCD("<< x <<", "<< y <<") = "<< GCD(x, y);
    return 0;
}

int GCD(int x, int y){
    int a, b, r;

    if(x > y){
        a = x;
        b = y;
    }
    else{
        a = y;
        b = x;
    }

    while(b != 0){
        r = a % b;
        a = b;
        b = r;
    }

    return a;
}
