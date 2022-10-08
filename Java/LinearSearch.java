import java.util.*;
class LinearSearch
{
    static int linearSearch(int[] arr, int n)
    {
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==n)
                return i;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int size=sc.nextInt();
        System.out.println("Enter the array Elememts");
        int[] arr=new int[size];
        for(int i=0;i<size;i++)
        {
            arr[i]=sc.nextInt();
        }
        System.out.println("Enter the elements to be searched");
        int n=sc.nextInt();
        int position = linearSearch(arr, n);
        if(position!=-1)
            System.out.println("Elemen foun at index "+position);
        else
            System.out.println("Element not found");
    }
}