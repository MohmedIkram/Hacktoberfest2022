const binarySearch = (arr,n) => {
  if(arr.length === 0 ) return false;
  let middle = Math.trunc(arr.length / 2) 
  let rest1 = arr.slice(0,middle);
  let rest2 = arr.slice(middle + 1, arr.length)
  if(arr[middle] < n)
     return binarySearch(rest2,n)
  else if(arr[middle] > n) 
    return binarySearch(rest1,n)
  else return true 
  
};
//test
let array = [1,3,8,12,26,55,64,72];
console.log(binarySearch(array,17))
console.log(binarySearch(array,12))