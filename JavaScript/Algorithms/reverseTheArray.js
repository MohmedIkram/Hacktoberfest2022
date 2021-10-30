function reverseTheArray(A){
		let out = [];
		for(let i = A.length - 1; i >= 0; i--){
			out.push(A[i]);
		}
		return out;
	}

let arr = [3,6,1,9];
console.log(reverseTheArray(arr));
