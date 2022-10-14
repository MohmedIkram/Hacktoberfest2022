public class ShellSort {

    public static void main(String[] args) {
          int numbers[]= {79,137,43,5,62,3,1,3,57,2,29,35};
          ShellSortAlgorithm(numbers);

          for(int num : numbers){
              System.out.println(num);
          }

    }

    public static void ShellSortAlgorithm(int[] v) {
        int n = v.length, gap, i, j;
        for (gap = n / 2; gap > 0; gap /= 2) {
            for (i = gap; i < n; i++) {
                int aux = v[i];
                for (j = i; j >= gap && aux < v[j - gap]; j -= gap) {
                    v[j] = v[j - gap];
                }
                v[j] = aux;
            }
        }
    }

}
