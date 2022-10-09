#include<bits/stdc++.h>
#include<algorithm>
using namespace std;
#define ll long long int

const int N=1e3+10;
static int t[N][N];

int knapsack(int coin[],int sum,int n){
    for(int i=0;i<n+1;i++){
        for(int j=0;j<sum+1;j++){
            if(j==0){
                t[i][j] = 0;
            }
            if(i==0){
                t[i][j] = INT_MAX-1;
            }
        }
    }
    int i=1;
    for(int col=1;col<sum+1;col++){
        if(col%coin[i-1] == 0){
            t[i][col] = col / coin[i-1];
        }else{
            t[i][col] = INT_MAX -1;
        }
    }

    for(int i=2;i<n+1;i++){
        for(int j=1;j<sum+1;j++){
            if(coin[i-1]<=sum){
                t[i][j] = min(1 + t[i][j - coin[i-1]] , t[i-1][j]);
            }else{
                t[i][j] = t[i-1][j];
            }
        }
    }

    return t[n][sum];
}

int main()
{
    int coins[] = {3,2,5};
    int n=3;
    int sum = 5;
    cout<<knapsack(coins,sum,n)<<endl;

    for(int i=0;i<n+1;i++){
        for(int j=0;j<sum+1;j++){
            cout<<t[i][j]<<" ";
        }
        cout<<endl;
    }
}