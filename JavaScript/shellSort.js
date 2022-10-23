let customGap = [700, 300, 132, 57, 23, 10, 4 , 1]
function shellSortWithCustomGaps(arr) {
	let n = arr.length;

	//Start with a really large gap, and then reduce the gap until there isn't any
	//This is to use a custom gap array that you setup beforehand.
	for (let gapIndex = 0; gapIndex < customGap.length; gapIndex++)
	{
		let gap = customGap[gapIndex];
		//Do a insertion sort for each of the section the gap ends up dividing
		for (let i = gap; i < n; i += 1)
		{
			//We store the current varible
			let temp = arr[i];
			
			//This is the insection sort to sort the section into order
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
			{
				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}

	return arr;
}