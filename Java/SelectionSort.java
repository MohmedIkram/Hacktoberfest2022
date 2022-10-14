
// Selection Sort Algorithm in java language

import java.util.Arrays;

public class selectionSort {

    public static void main(String[] args) {

        int[] numbers = {5,4,3,2,1};
        selection(numbers);
        System.out.println(Arrays.toString(numbers));

    }

    public static void selection(int[] array){

        for (int i = 0; i < array.length; i++) {

            int last = array.length-i-1;
            int max = maxElement(array,0, last );
            swap(array, max,last);

        }
    }

    public static void swap(int[] arr, int first, int second){
        int temp = arr[first];
        arr[first]=arr[second];
        arr[second]=temp;
    }

    public static int maxElement(int[] array, int start, int end){
        int max = start;

        for (int i = start; i <= end; i++) {
            if (array[i]> array[max]) {

                max=i;
            }
        }
        return max;
    }
}
