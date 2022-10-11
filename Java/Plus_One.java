package com.LeetCode;

import java.util.ArrayList;

public class Plus_One {
    public static void main(String[] args) {
        int[] arr={1,2,3};
        int[] ans=plusOne(arr);
        for(int ele: ans) {
            System.out.print(ele+" ");
        }
    }
    public static int[] plusOne(int[] digits) {
        ArrayList<Integer> res=new ArrayList<>();
        int carry=0;
        int n=digits.length;
        digits[n-1]++;
        if(digits[n-1]==10) {
            carry=1;
            digits[n-1]=0;
        }
        res.add(digits[n-1]);
        for(int i=n-2;i>=0;i--) {
            if(carry==1) {
                digits[i] += carry;
                if(digits[i]==10) {
//                    carry=1;
                    digits[i]=0;
                }
                else
                    carry = 0;
            }
            res.add(digits[i]);
        }
        if(carry!=0)
            res.add(carry); //res.add(1);
        int[] ans=new int[res.size()];
        int ind=ans.length-1;
        for(int i=0;i<ans.length;i++) {
            ans[i]=res.get(ind);
            ind--;
        }
        return ans;
    }
}
