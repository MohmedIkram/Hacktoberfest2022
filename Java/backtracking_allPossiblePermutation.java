public class backtracking_allPossiblePermutation {
    public static void printAllArangements(String str, String Stringformed){
        if(str.length()==0){
            System.out.println(Stringformed);
        }
        for(int i=0;i<str.length();i++){

            String newString = str.substring(0, i) + str.substring(i+1);
            printAllArangements(newString, Stringformed + str.charAt(i));

        }
    }
    public static void main(String[] args) {
        printAllArangements("ABC", "");
    }
}
