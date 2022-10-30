import java.util.*;
class trans
{
    int ar[][],m;
    trans(int a)
    {
        m=a;
        ar=new int [m][m];
    }
    void input()
    {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter elements of array");
    for (int i=0;i<m;i++)
    {
        for (int j=0;j<m;j++)
        {
         ar[i][j]=sc.nextInt();
        }
     System.out.println();
    }
    }
    void check(trans A)
    {
        boolean flag=true;
         for (int i=0;i<m;i++)
          {
           for (int j=0;j<m;j++)
            {
                if(ar[i][j]!=A.ar[i][j])
                flag=false;
            }
          }
          if(flag==false)
          System.out.println("NOT TRANSPOSE MATRIX");
          else
          System.out.println("TRANSPOSE MATRIX");
    }
    void transpose(trans k)
    {
     for (int i=0;i<m;i++)
        {
           for (int j=0;j<m;j++)
            {  
                ar[i][j]=k.ar[j][i];
            }
        }
    }
    public static void main(int s)
    {
        trans ob1=new trans(s);
        ob1.input();
        trans ob2=new trans(s);
        ob2.input();
        ob1.transpose(ob1);
        ob2.check(ob1);
    }
}