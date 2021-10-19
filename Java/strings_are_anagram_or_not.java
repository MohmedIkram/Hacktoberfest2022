package com.company;

import java.util.Locale;
import java.util.*;

public class Question36 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str1=sc.nextLine();
        String str2=sc.nextLine();
        char a1[]= str1.toCharArray();
        char a2[]=str2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
      
        if(Arrays.equals(a1,a2))
        {
            System.out.println(str1+" and "+str2+" are equal");
        }
        else
            System.out.println("not equal");
 }
}
