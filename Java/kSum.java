/* Given an array 'nums' of length 'n' , integer 'target' return all pair of length k whose sum is equal to target */
/*  example : 
Input: nums = [1,0,-1,0,-2,2], target = 0, k=4
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/
class KSum {
    int len=0;
    public List<List<Integer>> fourSum(int[] nums, int target,int k) {
        len = nums.length;
        Arrays.sort(nums);
        return kSum(nums,target,k,0);
    }
    private ArrayList<List<Integer>> kSum(int nums[],int target,int k,int i){
        ArrayList<List<Integer>> result=new ArrayList<List<Integer>>();
        if(i>=len){
            return result;
        }
        if(k==2){
            int j=len-1;
            while(i<j){
                if(target - nums[i] == nums[j]) {
            	    	List<Integer> temp = new ArrayList<>();
                    	temp.add(nums[i]);
                    	temp.add(target-nums[i]);
                        result.add(temp);
                        //skip duplication
                        while(i<j && nums[i]==nums[i+1]) i++;
                        while(i<j && nums[j-1]==nums[j]) j--;
                        i++;
                        j--;
                    //move left bound
            	    } else if (target - nums[i] > nums[j]) {
            	        i++;
                    //move right bound
            	    } else {
            	        j--;
            	    }
            }
        }
        else{
            for (; i < len - k + 1; i++) {
                    //use current number to reduce ksum into k-1sum
                    ArrayList<List<Integer>> temp = kSum(nums, target - nums[i], k-1, i+1);
                    if(temp != null){
                        //add previous results
                        for (List<Integer> t : temp) {
                            t.add(0, nums[i]);
                        }
                        result.addAll(temp);
                    }
                    while (i < len-1 && nums[i] == nums[i+1]) {
                        //skip duplicated numbers
                        i++;
                    }
                }
        }
        return result;
    }
}
