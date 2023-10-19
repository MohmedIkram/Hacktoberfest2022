// link -https://leetcode.com/problems/powx-n/

class Solution {
public:
    double myPow(double x, int n) {
        if(n==1)
        {
            return x;
        }
        if(n==-1)
        {
            return ((double)1/x);
        }
        if(n==0)
        {
            return 1;
        }
        
        double ans=myPow(x,n/2);
        cout<<ans<<endl;
        if(n%2==0 )
        {
            return ans*ans;
        }
        else
        {
            long double z;
            double y=ans*ans;
            cout<<y<<endl;
            if(n<0)
            z=y*(1/x);
            else
            z=y*x;
            return z;
        }

    }
};