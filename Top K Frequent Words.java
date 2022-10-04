/*

Leetcode Question
692. Top K Frequent Words

https://leetcode.com/problems/top-k-frequent-words/

*/
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        HashMap<String , Integer> hm = new HashMap<>();
        for(int i = 0; i < words.length; i++){
            hm.put(words[i] , hm.getOrDefault(words[i] , 0) + 1);
        }
        PriorityQueue<String> pq = new PriorityQueue<>((a , b) -> {
            if(hm.get(b) == hm.get(a)){
                return a.compareTo(b);
            }else{
                return hm.get(b) - hm.get(a);
            }
});
        for(String f : hm.keySet()){
            pq.add(f);
        }
        
        List<String> list = new ArrayList<>();
        while(k > 0){
          list.add(pq.poll());
            k--;
        }
        return list;
     }
}
