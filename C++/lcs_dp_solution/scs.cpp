//////////////////////////////////Shortest Common Supersequence//////////////////////////////////////////////
////////////the minimum number of steps required to make word1 and word2 the same.//////////////////////////////////////////////Longest Common Subsequence///////////////////////////////////////

#include<bits/stdc++.h>
using namespace std;

	int dp[1001][1001];

	int lcs(string &s1,string &s2,int m,int n){
		if(m==0 || n==0)
			return 0;
		if(dp[m][n]!=-1)
			return dp[m][n];

		if(s1[m-1]==s2[n-1])
			return dp[m][n]=1+lcs(s1,s2,m-1,n-1);
		else
			return dp[m][n]=max(lcs(s1,s2,m-1,n),lcs(s1,s2,m,n-1));

		return dp[m][n];
	}

	string p_scs(string &s1,string &s2,int m, int n){
     string s = "";
      while(m>0 && n>0){
       if(s1[m-1]==s2[n-1]){
       	s.push_back(s1[m-1]);
       	m--;
       	n--;
       }else{
       	 if(dp[m][n-1]>dp[m-1][n]){
       	 	s.push_back(s2[n-1]);
       	 	n--;
       	 }else{
       	 	s.push_back(s1[m-1]);
       	 	m--;
       	 }
       }
      }

      while(m>0){
      	s.push_back(s1[m-1]);
      	m--;
      }
      while(n>0){
      	s.push_back(s2[n-1]);
      	n--;
      }
    reverse(s.begin(),s.end());
      return s;
	}

    string shortestCommonSupersequence(string str1, string str2) {
        int m = str1.size();
        int n = str2.size();
        memset(dp,-1,sizeof(dp));
        lcs(str1,str2,m,n);
        

        return p_scs(str1,str2,m,n);
    }


int main()
{
    string s1,s2;
    cin>>s1;
    cin>>s2;

    cout<<shortestCommonSupersequence(s1,s2);

    return 0;
}