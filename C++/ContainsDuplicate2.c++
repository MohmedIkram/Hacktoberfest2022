/*
Leetcode Question link : https://leetcode.com/problems/contains-duplicate-ii/
*/

class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int,int> mp;
        for(int i=0; i<nums.size(); i++)
        {
            int curr = nums[i];
            if(mp.find(curr) != mp.end())
            {
                if(i - mp[curr] <= k)
                    return true;
            }
            mp[curr] = i;
        }
        return false;
    }
};