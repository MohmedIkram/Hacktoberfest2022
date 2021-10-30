// Given an array A and a integer B. A pair(i,j) in the array is a good pair if i!=j and (A[i]+A[j]==B). Check if any good pair exist or not.

function checkGoodPairsInArray(A, B){
		let arrASize = A.length;
		// For every number traverse all numbers right to it
		for(let i = 0; i <(arrASize - 1); i++){
			for(let j = (i + 1); j <(arrASize); j++){
				if((A[i] + A[j]) == B){
					return 1;
				}
			}
		}
		return 0;
	}

let A = [1,2,3,4];
let B = 7;
let out = checkGoodPairsInArray(A,B);
console.log(out);
