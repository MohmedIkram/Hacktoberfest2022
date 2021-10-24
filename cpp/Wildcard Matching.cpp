Question:-

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input: s = "acdcb", p = "a*c?b"
Output: false
 

Constraints:

0 <= s.length, p.length <= 2000
s contains only lowercase English letters.
p contains only lowercase English letters, '?' or '*'.
  
  
  
Code:-
  
  class Solution {
public:
    bool isMatch(string s, string p) {
        vector<vector<bool>>dp(p.size()+1,vector<bool>(s.size()+1,false));

        for(int i=p.size();i>=0;i--){
            for(int j=s.size();j>=0;j--){
                if(i==p.size()&&j==s.size()){
                    dp[i][j]=true;
                }else if(i==p.size()){
                    dp[i][j]=false;
                }else if(j==s.size()){
                    if(p[i]=='*'){
                        dp[i][j]=dp[i+1][j];
                        }else{
                    dp[i][j]=false;}
                }
                else if(p[i]==s[j]||p[i]=='?'){
                    dp[i][j]=dp[i+1][j+1];
                }else if(p[i]=='*'){
                    dp[i][j]=dp[i+1][j]||dp[i][j+1];
                }else{
                    dp[i][j]=false;
                }
            }
        }
        return dp[0][0];
    }
};
