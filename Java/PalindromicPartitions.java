// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class PalindromicPartitions {
    public static boolean isPalindrom(String s, int start, int end)
    {
        while(start<=end)
        {
            if(s.charAt(start++) != s.charAt(end--))
            {
                return false;
            }
        }
        return true;
    }
    
    public static void partition(int index,String s,ArrayList<String> path,ArrayList<ArrayList<String>> res)
    {
        if(index == s.length())
        {
            res.add(new ArrayList<>(path));
            return;
        }
        for(int i=index;i<s.length(); ++i)
        {
            if(isPalindrom(s,index,i))
            {
                path.add(s.substring(index,i+1));
                partition(i+1,s,path,res);
                path.remove(path.size()-1);
            }
        }
    }
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        String s = "racecar";
        ArrayList<ArrayList<String>> res = new ArrayList<>();
        ArrayList<String> path = new ArrayList<>();
        partition(0,s,path, res);
        System.out.println(res);
    }
}
