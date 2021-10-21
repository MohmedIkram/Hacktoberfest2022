/**
 * @Author Varun
 */
import java.util.HashSet;
import java.util.Set;

public class DuplicateNumber {

	public static void main(String[] args) {
		int [] array= new int[]{3,4,5,1,2,2}; //static input make it dynamic as per your need.
		System.out.println(getDuplicateNumber(array));
	}

	private static int getDuplicateNumber(int[] array) {
		// TODO Auto-generated method stub
		Set<Integer> value = new HashSet<Integer>();
		for(int i : array) {
			if(value.contains(i))
				return i;
			value.add(i);
		}
		return -1;
	}
}
