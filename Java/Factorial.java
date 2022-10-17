
import java.util.Scanner;

public class Factorial {

    public static void main(String[] args) {

        Scanner obj = new Scanner(System.in);
        System.out.println("Enter the integer whose factorial you want");
        int num = obj.nextInt();
        long factorial = 1;
        for(int i = 1; i <= num; ++i)
            factorial *= i;

        System.out.printf("Factorial of %d = %d", num, factorial);
    }
}