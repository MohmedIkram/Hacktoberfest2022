
import java.util.*;

class CyclicSort {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++){
            arr[i] = input.nextInt();
        }            //For eg if array is 4, enter 4 consecutive numbers in random order from 1 to 4

        Cyclicsort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void Cyclicsort(int[] arr){
        int i=0;
        while(i<arr.length){
            int corr_index = arr[i] - 1; //Correct index will be element -1 because numbers are N and from 1 to N
            if(arr[i]!= arr[corr_index]){ //If element not at correct index, swap
                swap(arr,i,corr_index);
            }
            else{
                i++;
            }
        }
    }

     static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}
