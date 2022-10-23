import java.util.Scanner;

 public class div7{
    public static void DivisibleBy7(int num){
        if(num % 7 == 0){
            System.out.println("yes");
        }
        else{
            System.out.println("no");
        }
    }

        public static void main(String [] args){
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            DivisibleBy7(n);
    }
}
