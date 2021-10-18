/*
 *  Composite number:A composite number is a number which has more than 2 factors.
For example: 10 Factors are: 1,2,5,10.
Magic number:A magic number is a number in which the eventual sum of the
digits is equal to 1.For example: 28 = 2+ 8 =10 = 1+0=1
 */
import java.util.*;
public class numcheck{
    int p,q;
    numcheck(int pp,int qq){
        p=pp;q=qq;
    }

    int addDigits(int n){
        if(n==0)return 0;
        else return n%10+addDigits(n/10);
    }
    int isMagic(int n){
        if(n<=9)return n;
        else return isMagic(addDigits(n));
    }
    boolean isComposite(int n){
        int count=0;
        for(int i=2;i<=(int)Math.sqrt(n);i++)if(n%i==0)count++;
        return count!=0;
    }
    void Print(){
        System.out.println("List of Composite Magic Numbers : ");
        for(int i=p;i<=q;i++)
            if(isComposite(i) && isMagic(i)==1)System.out.print(i+" ");
    }
    public static void main(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter range : ");
        numcheck ob = new numcheck(sc.nextInt(),sc.nextInt());
        ob.Print();
    }
}
/*
 * Enter range : 
1
200
List of Composite Magic Numbers : 
10 28 46 55 64 82 91 100 118 136 145 154 172 190 
 */
