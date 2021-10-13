#include<bits/stdc++.h>
using namespace std;

int power(int a, int b) {
    int res = 1;
    while(b) {
        if(b & 1) res = res * a;
        b >>= 1;
        a = a * a;
    }
    return res;
}

int main() {
    int a = 5, b = 2;
    cout << power(a, b) << "\n";
    return 0;
}