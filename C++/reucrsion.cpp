#include <iostream>
using namespace std ;
int power(int n,int p){
    if(p==0){
        return 1;
    }
    int prevPro=power(n,p-1);
    return n*prevPro;
}
int sum(int n){
    if(n==0){
        return 0;
    }
    int prevSum=sum(n-1);
    return n+prevSum;
}
int factorial(int n){
    if (n==0){
        return 1;
    }
    int prevFac=factorial(n-1);
    return n*prevFac;
}
int main(){
    int n;
    int p;
    cin>>n;
    cin>>p;
    cout<<"the power of "<<n<<"to the power "<<p<<"is"<<endl;
    cout<<power(n,p)<<endl;
    cout<<"the sum of "<<n<<"is"<<endl;
    cout<<sum(n)<<endl;
    cout<<"the factorial of "<<n<<"is"<<endl;
    cout<<factorial(n);
    return 0;
}
