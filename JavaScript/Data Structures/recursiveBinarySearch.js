function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length-1);
}

function search(arr, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex){
    return -1;
  }

  let middle = Math.floor((leftIndex+rightIndex)/2);
  if(target === arr[middle]){
    return middle
  }

  if(target < arr[middle]){
    return search(arr, target, leftIndex ,middle -1)
  }

  else{
    return search(arr, target, middle+1, rightIndex)
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(recursiveBinarySearch([-2, 4, 8, 12, 45, 51], 12)); //3
console.log(recursiveBinarySearch([-2, 4, 8, 12, 45, 51], 20)); //-1
