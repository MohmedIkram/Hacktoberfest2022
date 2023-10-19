#include <bits/stdc++.h>
using namespace std;

int count_setbit_hack(int n){
    int counter=0;

    while(n>0){
        n= (n&(n-1));
        counter++;
    }

    return counter;
}

int main(){
    int n;
    cin >> n;
    int cnt=0;
    while(n>0){
        int last_bit = (n&1);
        cnt += last_bit;
        n= n>>1;
    }

    cout << cnt << ",";
    cout << count_setbit_hack(16);
}
