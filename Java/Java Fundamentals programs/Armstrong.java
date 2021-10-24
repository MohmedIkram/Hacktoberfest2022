import java.io.*;
import java.util.*;
class Armstrong{
	public static void main(String args[]){
		int number,sum=0,rem=0;
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the number");
		number=sc.nextInt();
		int copyNumber=number;
		while(number!=0){
		rem=number%10;
		sum+=(rem*rem*rem);
		number/=10;
		}
		if(sum==copyNumber){
			System.out.println("The given number "+copyNumber+" is a Armstrong Number");
		}
		else{
			System.out.println("The given number is "+copyNumber+" is not a Armstrong Number");
		}
	}
}
			