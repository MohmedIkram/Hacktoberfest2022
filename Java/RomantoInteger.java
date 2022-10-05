/*

Leetcode Question 
https://leetcode.com/problems/roman-to-integer/

*/
class Solution {
    public int romanToInt(String s) 
    {
        HashMap<Character, Integer> hm = new HashMap<>();
         hm.put('I', 1);int i;
         hm.put('V', 5);
         hm.put('X', 10);
         hm.put('L', 50);
         hm.put('C', 100);
         hm.put('D', 500);
         hm.put('M', 1000);
        int r= hm.get(s.charAt(s.length()-1));
        for(i=s.length()-2; i>=0; i--)
        {
            if(hm.get(s.charAt(i))<hm.get(s.charAt(i+1)))
            {
                r-=hm.get(s.charAt(i));
            }
            else
                r+=hm.get(s.charAt(i));
        }
        return r;
    }
}
