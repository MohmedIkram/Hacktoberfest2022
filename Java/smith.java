import java.util.*;
class smith
{
    int num;
    smith(int nn)
    {
        num=nn;
    }
    int sumDig(int a)
    {
        int s=0;
        while(a>0)
        {
            s=s+a%10;
            a=a/10;
        }
        return s;
    }
    void check()
    {
        int cpy=num,sum=0,d=2;
        while(cpy>1)
        {
            if(cpy%d==0)
            {
                sum=sum+sumDig(d);
                cpy=cpy/d;
            }
            else
            d++;
        }
        if(sum==sumDig(num))
        System.out.println("smith number");
        else
         System.out.println(" not a smith number");
        }
         static void main()
        {
            Scanner sc=new Scanner(System.in);
            System.out.println("enter a number");
            int nn=sc.nextInt();
            smith obj=new smith(nn);
            obj.check();
            }   }
