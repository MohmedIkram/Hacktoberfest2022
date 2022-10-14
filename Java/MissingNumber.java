
public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {0, 5, 1, 2, 4};
        int num = findNumber(arr);
        System.out.println(num);
    }

    public static int findNumber(int[] arr) {
        int i = 0;
        while (i < arr.length) {
            if (arr[i] < arr.length && arr[i] != i){
                swap(arr, i, arr[i]);
            } else {
                i++;
            }
        }

        for (int j = 0; j < arr.length; j++) {
            if (arr[j] != j) {
                return j;
            }
        }
        return arr.length;
    }

    public static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}
