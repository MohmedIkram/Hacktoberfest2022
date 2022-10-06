#include <bits/stdc++.h>
using namespace std;
int ultSum(int n){
    int s=0,rem;
    while(n!=0){
        rem=n%10;
        s+=rem;
        n/=10;
    }
    if(floor(log10(s)+1) > 1)
        ultSum(s);
    else
        return s;
}

int main(){
    int n;
    cin>>n;
    cout<<ultSum(n)<<endl;
    // cout<<log10(n)+1;
}