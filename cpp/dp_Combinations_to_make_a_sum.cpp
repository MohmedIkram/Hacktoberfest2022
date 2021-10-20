#include <bits/stdc++.h>
#include <iostream>
using namespace std;

#define fo(u, k, n) for (u = k; u <= n; u++)
#define pb push_back
#define mp make_pair
#define all(x) x.begin(), x.end()
#define allr(c) c.rbegin(), c.rend()
#define mem(x) memset(x, 0, sizeof(x))
#define PI 3.1415926535897932384626

typedef long long ll;
typedef long long unsigned llu;
typedef pair<ll, ll> pll;
typedef vector<ll> vll;
typedef vector<pll> vpll;
typedef vector<vll> vvll;
typedef map<ll, ll> ml;
typedef map<ll, bool> mlb;

const int MOD = 1000000007;

class Solution
{
public:
    long combinationSum4(vector<long> &nums, int target)
    {

        long long unsigned dp[target + 1];
        dp[0] = 1;

        for (long i = 1; i <= target; i++)
        {

            dp[i] = 0;
            for (long j = 0; j < nums.size(); j++)
            {

                if (i - nums[j] >= 0)
                {
                    dp[i] = dp[i] + dp[i - nums[j]];
                }
            }
        }

        return dp[target];
    }
};

int main()
{
    Solution obj1;
    vector<long> nums{1, 2, 3};
    cout << obj1.combinationSum4(nums, 4) << endl;

    return 0;
}