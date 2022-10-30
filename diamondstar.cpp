#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sp = n/2, st = 1;
    for(int i =1; i <= n; i++){
        for(int j = 1; j <= sp; j++){
            printf("\t");
        }
        for(int k = 1; k <= st; k++){
            printf("*\t");
        }
        cout << "\n";
        if(i<=n/2){
            sp--;
            st+=2;
        }
        else{
            st-=2;
            sp++;
        }
    }
}
