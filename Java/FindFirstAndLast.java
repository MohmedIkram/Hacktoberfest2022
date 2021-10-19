// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

class Solution {
    public int[] searchRange(int[] nums, int target) {
        
         int[] ans = {-1, -1};
        
         //check for first occurrence of target
         ans[0] = search(nums,target,true);
		 if(ans[0] != -1) {
         ans[0] = search(nums,target, false);
         }
		 
         return ans;        
        
    }
    
    // this function will return the index value of target
    int search(int[] nums, int target, boolean findStartIndex) {
        //findStartIndex - whether first occurrence or last occurrence
        
         // my potential answer is -1
         int ans = -1;
       
         int start = 0;
         int end = nums.length - 1;
        
         while(start <= end) {
            
            int mid = start + (end - start) / 2;
            
            if(target < nums[mid]) {
                end = mid - 1;
            } else if(target > nums[mid]) {
                start = mid + 1;
            } else {
                // potential ans found
                ans = mid;
                if(findStartIndex) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
                
      return ans;
        
    } 
}
