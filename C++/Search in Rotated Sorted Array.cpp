// Search in Rotated Sorted Array
// Leetcode

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int low=0, high=nums.size()-1;
        while(low<=high)
        {
            int mid=(low+high)/2;
            if(target==nums[mid])return mid;

            if(nums[mid]>=nums[low])
            {
                if(target>=nums[low] and target<=nums[mid]) high=mid-1;
                else low=mid+1;
            }
            else
            {
                if(target>=nums[mid] and target<=nums[high])low=mid+1;
                else high=mid-1;
            }
            
        }
        return -1;
    }
    
};
