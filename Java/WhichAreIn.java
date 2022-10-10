import java.util.*;

public class WhichAreIn {
    public static String[] inArray(String[] array1, String[] array2) {
        ArrayList<String> tab = new ArrayList<>();
        HashMap<String, Integer> val = new LinkedHashMap<>();
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                if (isSubstring(array1[i], array2[j]))
                    tab.add(array1[i]);
            }
        }
//        System.out.println(tab);

        for (int i = 0; i < tab.size(); i++) {
            if (val.containsKey(tab.get(i))) {
                val.put(tab.get(i), val.get(tab.get(i)) + 1);
            } else {
                val.put(tab.get(i), 1);
            }
        }
        ArrayList<String> finalArray = new ArrayList<>();
        for (Map.Entry entry : val.entrySet()) {
            if (Integer.valueOf((Integer) entry.getValue()) >= 1) {
                finalArray.add((String) entry.getKey());
            }
        }
        Collections.sort(finalArray);
        String[] strings = finalArray.stream().toArray(String[]::new);
        return strings;
    }

    static boolean isSubstring(String s1, String s2) {
        int M = s1.length();
        int N = s2.length();

        /* A loop to slide pat[] one by one */
        for (int i = 0; i <= N - M; i++) {
            int j;
            /* For current index i, check for
            pattern match */
            for (j = 0; j < M; j++)
                if (s2.charAt(i + j) != s1.charAt(j))
                    break;
            if (j == M)
                return true;
        }
        return false;
    }
}