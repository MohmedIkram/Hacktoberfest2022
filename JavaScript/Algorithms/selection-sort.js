function selectionSort(arr, arr_length) {
  var i, j, min_itr, temp;

  for (i = 0; i < arr_length - 1; i++) {
    // Find the minimum element in unsorted array
    min_itr = i;
    for (j = i + 1; j < arr_length; j++) if (arr[j] < arr[min_itr]) min_itr = j;

    // Swap to found minimum element with the first element
    temp = arr[min_itr];
    arr[min_itr] = arr[i];
    arr[i] = temp;
  }

  return arr;
}


// Testing
var arr = [64, 45, 12, 79, 24, 88, 34];
var arr_length = 7;
console.log(selectionSort(arr, arr_length));
