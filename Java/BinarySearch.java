import java.util.Scanner;

/* Java program for Binary Search
Data structure used = Array
Binary Search is a searching algorithm for finding an element's position in a sorted array.
In this approach, the element is always searched in the middle of a portion of an array.

Input Format
1st line - size of array
2nd line - sorted elements of array
3rd line - search key in int

Example -
Input
6
-1 0 3 5 9 12
9
Output
4
*/
public class BinarySearch {

    /**
     * @param a   Accepts sorted array of type int[]
     * @param key Accepts search element of type int
     * @return index of element of type int if found otherwise -1
     */
    public static int binarySearch(int[] a, int key) {
        int l = 0, h = a.length - 1;
        while (l <= h) {
            int m = l + (h - l) / 2;
            if (a[m] > key)// if key is present in first half
                h = m - 1;
            else if (a[m] < key)// if key is present in second half
                l = m + 1;
            else // a[m] == key
                return m;
        }
        return -1;
    }


    /**
     * @param arr Accepts array of type int and prints it in console
     */
    static void printArray(int[] arr) {
        for (Object element : arr) System.out.print(element + " ");
        System.out.println();
    }

    // Driver code
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        //size of input array
        int p = sc.nextInt();

        int[] arr = new int[p];
        // taking array as input
        for (int i = 0; i < p; i++)
            arr[i] = sc.nextInt();

        // taking search element
        int keyElement = sc.nextInt();

        System.out.println("Given Array: ");
        printArray(arr);

        int result = binarySearch(arr, keyElement);

        if (result > 0)
            System.out.println(keyElement + " found at index " + result);
        else System.out.println(keyElement + " not found");
    }
}
