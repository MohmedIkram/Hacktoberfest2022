function linear_search(arr, n, sno)
{
	for (var i = 0; i < n; i++)
		if (arr[i] == sno)
			return i;
	return -1;
}
	const arr = [ 22, 54, 2, 15, 420, 2021, 19 ];
	const sno = 20211;
	
	let result = linear_search(arr, arr.length, sno);

if (result == -1){
    console.log("Element is not present in array");
}
else{
    console.log("Element is present at index " + result);   
}
