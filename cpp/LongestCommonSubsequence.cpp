#include <bits/stdc++.h>
using namespace std;


int lcs(string s, string r){
    int n = s.size();
    int m = r.size();
    vector<vector<int>>dp (n+1,vector<int>(m+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(s[i-1]==r[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            else{
                dp[i][j] = max(dp[i-1][j] , dp[i][j-1]);
            }
        }
    }
    
    return dp[n][m];
}


// Main Function 
int main()
{
    string s,r;
    cin>>s>>r;
    cout<<lcs(s,r)<<endl;
    return 0;   
}
