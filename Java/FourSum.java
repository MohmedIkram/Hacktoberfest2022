/*
 * Return a list of all the 4 numbers which sum to target number. 
 */

// O(n*n) time | O(n*n) space
public static List<Integer[]> fourNumberSum(int[] array, int targetSum) {
  Map<Integer, List<Integer>> available = new HashMap<>();
  for(int i=0; i<array.length; i++) {
    for(int j=i+1; j<array.length; j++) {
      int sumHere = array[i] + array[j];
      List<Integer> idxHere =
        available.getOrDefault(sumHere, new ArrayList<Integer>());

      idxHere.add(i);
      idxHere.add(j);
      available.put(sumHere, idxHere);
    }
  }

  Set<List<Integer>> res = new HashSet<>();

  for(int i=0; i<array.length; i++) {
    for(int j=i+1; j<array.length; j++) {
      int required = targetSum - (array[i] + array[j]);

      if(available.containsKey(required)) {
        List<Integer> vals = available.get(required);

        for(int x=0; x<vals.size(); x+=2) {
          if(vals.get(x) >= i || vals.get(x+1) >= j || vals.get(x) >= j || vals.get(x+1) >= i) continue;
          List<Integer> oneRes =
            List.of(array[vals.get(x)], array[vals.get(x+1)], array[i], array[j]);
          res.add(oneRes);
        }
      }
    }
  }

  // Formatting the required return type
  List<Integer[]> toReturn = new ArrayList<>();
  res.stream().forEach(el -> {
    Integer[] oneRes = new Integer[4];
    for(int i=0; i<4; i++) oneRes[i] = el.get(i);

    toReturn.add(oneRes);
  });

  return toReturn;
}
