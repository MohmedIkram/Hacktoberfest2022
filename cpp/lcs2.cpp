////////////the minimum number of steps required to make word1 and word2 the same.//////////////////////////////////////////////Longest Common Subsequence///////////////////////////////////////

#include<bits/stdc++.h>
using namespace std;

	int dp[502][502];
	int lcs(string &word1,string &word2,int m,int n){
		if(m==0 || n==0)
			return 0;
		if(dp[m][n]!=-1)
			return dp[m][n];

		if(word1[m-1]==word2[n-1]){
			return dp[m][n] = 1+lcs(word1,word2,m-1,n-1);

		}else{
			return dp[m][n] = max(lcs(word1,word2,m-1,n),lcs(word1,word2,m,n-1));
		}

		return dp[m][n];
      
	}
    int minDistance(string word1, string word2) {
        memset(dp,-1,sizeof(dp));
        int size1 = word1.size();
        int size2 = word2.size();
        int lcs_size=lcs(word1,word2,size1,size2);
     
     return (size1-lcs_size+size2-lcs_size);
    }


int main()
{
    string s1,s2;
    cin>>s1;
    cin>>s2;

    cout<<minDistance(s1,s2);

    return 0;
}