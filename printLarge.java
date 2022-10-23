import java.math.BigInteger;
import java.util.*;
public class printLarge {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter 2 very big nos.");
        String a=sc.next();
        String b=sc.next();
        BigInteger A,B;
        A=new BigInteger(a);
        B=new BigInteger(b);
        BigInteger add=A.add(B);
//        BigInteger prod=A.pow(0)
        System.out.println(add);
        
        
	}

}
