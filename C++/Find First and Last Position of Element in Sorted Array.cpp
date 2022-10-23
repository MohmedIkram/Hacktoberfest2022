//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/



class Solution {
public:
    int firstoccur(vector<int>& nums, int key)
        {
            int s=0;
            int e=nums.size()-1;
            int mid=s+(e-s)/2;
            int ans=-1;
            while(s<=e)
            {
                if(nums[mid]==key )
                {
                    ans=mid;
                    e=mid-1;
                }
                else if(nums[mid]>key)
                {
                    e=mid-1;
                }
                else
                {
                    s=mid+1;
                }
                mid=s+(e-s)/2;
            }
            return ans;
        };
        int secondoccur(vector<int>& nums, int key)
        {
            int s=0,ans=-1;
            int e=nums.size()-1;
            int mid=s+(e-s)/2;
            while(s<=e)
            {
                if(nums[mid]==key )
                {
                    ans=mid;
                    s=mid+1;
                }
                else if(nums[mid]>key)
                {
                    e=mid-1;
                }
                else
                {
                    s=mid+1;
                }
                mid=s+(e-s)/2;
            }
            return ans;
        };

    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> v;
        v.push_back(firstoccur(nums,target));
        v.push_back(secondoccur(nums,target));
        return v;
};
};