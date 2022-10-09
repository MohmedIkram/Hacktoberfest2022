#include<bits/stdc++.h>
#include<algorithm>
using namespace std;
#define ll long long int

const int N=1e3+10;
static int t[N][N];

int knapsack(int length[], int price[], int len, int n){
    for(int i=0;i<n+1;i++){
        for(int j=0;j<len+1;j++){
            if(i==0 || j==0){
                t[i][j] = 0;
            }
        }
    }

    for(int i=1;i<n+1;i++){
        for(int j=1;j<len+1;j++){
            if(length[i-1]<= j){
                t[i][j] = max(price[i-1] + t[i][j-length[i-1]],
                                t[i-1][j]);
            }else{
                t[i][j] = t[i-1][j];
            }
        }
    }
    return t[n][len];
}

int main()
{
    int length[] = {1,2,3,4,5,6,7,8};
    int price[] = {1,5,8,9,10,17,17,20};
    int len=8;
    int n = 8;
    cout<<knapsack(length,price,len,n)<<endl;

    for(int i=0;i<n+1;i++){
        for(int j=0;j<len+1;j++){
            cout<<t[i][j]<<" ";
        }
        cout<<endl;
    }
}