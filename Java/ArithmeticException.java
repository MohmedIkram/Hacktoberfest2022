import java.io.* ;
class Test{
    public static void main(String args[])
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the first number: ");
        int c=0;
        try{
            int a=Integer.parseInt(br.readLine());
            System.out.println("Enter the second number: ");
            int b=Integer.parseInt(br.readLine());

            c=(a/b);
        }

        catch(Exception e){}
        System.out.println(c);
    }
}
