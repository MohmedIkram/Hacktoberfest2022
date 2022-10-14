//break a palindrome leetcode solution

class Solution {
public:
    string breakPalindrome(string palindrome) {
        string ans="";
        int n=palindrome.size();
        if(n==1)
        {
        }
        else
        {
            for(int i=0; i<n; i++)
            {
                if(palindrome[i]!='a')
                {
                    palindrome[i]='a';
                    ans=palindrome;
                    break;
                }
                if(i==(n>>2)&&(n&1))
                {
                    palindrome[n-1]='b';
                    ans=palindrome;
                    break;
                }
                if(i==n-1)
                {
                    palindrome[i]='b';
                    ans=palindrome;
                }
            }
        }
        return ans;
    }
};
