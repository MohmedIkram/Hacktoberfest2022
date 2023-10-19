// Generate Parenthesis leetcode solution

class Solution {
public:
    
    vector<string> v;
    
void gp(string &s, int o, int c)
{
    if(o==0&&c==0)
    {v.push_back(s);
        return;
    }
    if(o>0)
    {
        s.push_back('(');
        gp(s,o-1,c);
        s.pop_back();
    }
    if(c>0)
    {
        if(c>o)
        {
            s.push_back(')');
            gp(s,o,c-1);
            s.pop_back();
        }
    }
}
 
    vector<string> generateParenthesis(int n) {
        string s;
        gp(s,n,n);
            return v;
    }
};
