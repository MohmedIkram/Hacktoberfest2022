public class Main {

    public static void main(String[] args) {
        for(int i=1;i<=5;i++)
        {
            for(int j=1;j<=6-i;j++)
            {
                System.out.print(i+" ");
            }
            System.out.println();
        }
        for(int k=6;k<10;k++)
        {
            for(int x=1;x<=k-4;x++)
            {
                System.out.print(k+" ");
            }
            System.out.println();
        }
    }
}
