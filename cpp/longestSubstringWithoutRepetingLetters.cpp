
// CPP Program to find Longest Substring Without Repeating Characters


#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string S) {

        int n = S.length();
        if(n==0) return 0;
        if(n==1) return 1;
        map<char, int> m;

        int start = 0;
        int l = 0;

        //m[S[0]]++;

        for(int end=0;end<n;end++)
        {

            if( m.find(S[end]) != m.end() )
            {
                start = max(start, m[S[end]]+1);
            }

                m[S[end]]=end;
                l = max(l, end-start+1);
        }

        return l;

    }

int main()
{
    string s;
    cin >> s;
    cout << "Length of Longest Substring Without Repeating Characters is : " << lengthOfLongestSubstring(s);
}
