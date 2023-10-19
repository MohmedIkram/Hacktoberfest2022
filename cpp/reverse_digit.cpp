#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define endl "\n"
#define MAX 1e9+7
#define MIN -1e9-7
#define mem memset(a, 0, sizeof(a))
#define pb push_back
int rec_reverse_digit(int n)
{
    //we are using static vareable here
    static int rev=0;
    if(n==0)
    {
        return 0;
    }
    int digit=n%10;
    rev=rev*10+digit;
    rec_reverse_digit(n/10);
    return rev;
}
int it_reverse_digit(int n)
{
    int rec=0;
    while(n>0)
    {
        rec=rec*10+(n%10);
        n/=10;
    }
    return rec;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin>>n;
    //itretive solution
    int ans=it_reverse_digit(n);
    cout<<ans<<endl;
    //recursive solution
    ans=rec_reverse_digit(n);
    cout<<ans<<endl;

    
return 0;
}
