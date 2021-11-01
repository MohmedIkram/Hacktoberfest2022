public class RepetitionChecker {
    public static void main(String[] args) {
        int[] arr = {4, 5, 6, 6, 4, 3, 6, 4};
//        int[] arr = {3, 4, 6, 3, 4, 7, 4, 6, 8, 6, 6};
        System.out.println(repetitionChecker(arr));
    }

    public static boolean repetitionChecker(int[] array) {
        int max = array[0];
        for (int i = 1; i < array.length; i++) if (max < array[i]) max = array[i];
        int[] duplicate = new int[max + 1];
        for (int j : array) duplicate[j]++;

        for (int i = 0; i < duplicate.length; i++) {
            for (int j = i + 1; j < duplicate.length; j++) {
                if (duplicate[i] == duplicate[j] && duplicate[i] > 1) {
                    return true;
                }
            }
        }
        return false;
    }
}