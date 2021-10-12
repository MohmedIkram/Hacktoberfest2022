const max = (arr , mx = arr[0]) => {
  if(arr.length === 0)  return mx;
  if(mx < arr[0]) mx = arr[0];
  let rest = arr.slice(1)
  return max(rest,mx)
};
let array = [-1,-2,6,-3,7,-5]
//test
console.log(max(array))