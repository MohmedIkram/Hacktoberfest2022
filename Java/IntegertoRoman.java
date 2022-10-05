/*

Java Leetcode Solution

12. Integer to Roman
https://leetcode.com/problems/integer-to-roman/

*/

class Solution {
    public String intToRoman(int num) {
        
        int nums[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        
        String code[]={"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        
        int i;
        String str=""; 
        for(i=0; i<nums.length; i++)
        {
            while(num >= nums[i])
            {
                str = str + code[i];
                num-=nums[i];
            }
        }
        return str;
    }
}
