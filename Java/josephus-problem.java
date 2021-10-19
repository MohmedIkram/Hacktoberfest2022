import java.util.*;

class josephusprblm
{
    static int josephus(int n, int k)
    {
        if (n == 1)
            return 1;
		else
		    return (josephus(n - 1, k) + k - 1) % n + 1;
	}
	
	public static void main(String args[])
	{
	    Scanner sc= new Scanner(System.in);
		int n, k;
		System.out.print("Enter the value of n: ");
		n = sc.nextInt();
		System.out.print("Enter the value of k: ");
		k = sc.nextInt();
		System.out.println("Position is: " + josephus(n, k));
	}
}
