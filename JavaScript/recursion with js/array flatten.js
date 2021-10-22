function flatten(arr) {
  let flatArr = [];
  arr.forEach(el => {
    if(Array.isArray(el)){
      const result = flatten(el);
      result.forEach(el => flatArr.push(el));
    } else {
      flatArr.push(el);
    }
  });
  return flatArr;
}

const input = [1,[2,3],[4,5,[6,7]],8,[9,[10,11]]];
const output = flatten(input);

console.log(output);
