#include <bits/stdc++.h>
using namespace std;


// 1st Method :-  By recursion

bool equal_rec(int arr[],int size,int sum)
{
    if(sum==0)
        return true;
    if(size==0)
        return false;
    if(arr[size-1]<=sum)
        return equal_rec(arr,size-1,sum-arr[size-1]) || equal_rec(arr,size-1,sum);
    else 
        return equal_rec(arr,size-1,sum);
}

// 2nd Method:- By recursion + Memoization

bool equal_rec_mem(int arr[],int size,int sum,vector<vector<int>> t)
{
    if(sum==0)
        return true;
    if(size==0)
        return false;
    if(t[size][sum]!=-1)
        return t[size][sum];
    
    if(arr[size-1]<=sum)
        return t[size][sum] = equal_rec_mem(arr,size-1,sum-arr[size-1],t) || equal_rec_mem(arr,size-1,sum,t);
    else 
        return t[size][sum] = equal_rec_mem(arr,size-1,sum,t);
}


// 3rd Method :- BY DP

bool equal_dp(int arr[],int size,int sum)
{
    bool dp[size + 1][sum + 1];
 
    // If sum is 0, then answer is true
    for (int i = 0; i <= size; i++)
        dp[i][0] = true;
 
    // If sum is not 0 and set is empty,
    // then answer is false
    for (int i = 1; i <= sum; i++)
        dp[0][i] = false;
 
    // Fill the subset table in bottom up manner
    for (int i = 1; i <= size; i++) {
        for (int j = 1; j <= sum; j++) {
            if (arr[i - 1]<=j)
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
            else
                dp[i][j] = dp[i - 1][j];
        }
    }
 
       // uncomment this code to print table
     for (int i = 0; i <= size; i++)
     {
        for (int j = 0; j <= sum; j++){
            cout<<" "<<dp[i][j]<<" ";
        }
        cout<<endl;
     }
 
    return dp[size][sum];
}




int main(){
    ios_base::sync_with_stdio(false);
        cin.tie(NULL);
    
    int arr[]={1,5,11,5};
    int size=sizeof(arr)/sizeof(arr[0]);

    int sum=0;
    for(int i=0;i<size;i++)
        sum+=arr[i];
    

    if(sum&1)
        cout<<false<<endl;
    else
    {
        cout<<"Answer by recursion = "<<equal_rec(arr,size,sum/2)<<endl;       // by recursion

        vector<vector<int>> t(size+1, vector<int> ((sum/2)+1,-1));
        cout<<"Answer by recursion + memoization = "<<equal_rec_mem(arr,size,sum/2,t)<<endl;       // by recursion + memoization

        cout<<"Answer by DP = "<<equal_dp(arr,size,sum/2)<<endl;       // by DP
    }

return 0;
}