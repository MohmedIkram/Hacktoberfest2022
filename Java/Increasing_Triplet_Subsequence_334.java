package com.LeetCode;

public class Increasing_Triplet_Subsequence_334 {
    public static void main(String[] args) {
        int[] arr={20,100,10,12,5,13};
        System.out.println(increasingTriplet(arr));
    }
    private static boolean increasingTriplet(int[] arr) {
        if(arr.length<3)
            return false;
        int i=0,k=arr.length-1;
        int j=(i+k)/2;
        while(i<k) {
            if(arr[i]<arr[j] && arr[j]<arr[k] && i<j && j<k)
                return true;
            if(arr[i]>arr[j])
                i++;
            else if(arr[j]>arr[k])
                j++;
            else
                k--;
            if(i==j) {
                j++;
            }
        }
        return false;
    }
}
