/**
 * @Author Douly
 */
import java.util.HashSet;
import java.util.Set;

/**
Checks if given array has any pair with sum k
**/
public class CheckPairWithSum {

	public static void main(String[] args) {
		int [] array= new int[]{3,4,5,1,2,2}; //static input make it dynamic as per your need.
		System.out.println(checkIfPairExistsHavingSum(array,6));
		System.out.println(checkIfPairExistsHavingSum(array,10));
	}

	/**
	Checks if passed array has any pair with sum k.Returns 1 if any pair is found.Returns -1 if no such pair exists
	**/
	private static int checkIfPairExistsHavingSum(int[] array,int k) {
		// TODO Auto-generated method stub
		Set<Integer> value = new HashSet();
		for(int i : array) {
			value.add(i);
		}
		for(int i : array) {
			if(2*i==k ) {
			   if (checkMoreThanOneOccurence(array,i))
				return 1;
			}
			else if(value.contains(k-i))
				return 1;
		}

		return -1;
	}

	private static boolean checkMoreThanOneOccurence(int[] array,int num) {
		int count=0;
		for(int i : array) {
			if(i==num) count++;
			if(count>1) return true;
		}
		return false;
	}
}
