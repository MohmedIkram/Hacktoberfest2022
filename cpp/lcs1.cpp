//////////////////////////Longest Common Subsequence///////////////////////////////////////

#include<bits/stdc++.h>
using namespace std;

int dp[1001][1001];
	
int longestCommonSubsequence(string text1, string text2) {
        int s1 = text1.size();
        int s2 = text2.size();
    
       
        for(int i=0;i<=s1;i++){
            for(int j=0;j<=s2;j++){
                if(i==0 || j==0)
                    dp[i][j]=0;
            }
        }
        for(int i=1;i<=s1;i++){
            for(int j=1;j<=s2;j++){
                if(text1[i-1]==text2[j-1])
                    dp[i][j]=1+dp[i-1][j-1];
                else
                    dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
            }
        }
        return dp[s1][s2];
    }


int main()
{
    string s1 = "abcde";
    string s2 = "ace";

    cout<<longestCommonSubsequence(s1,s2);

    return 0;
}