var arr = [1, 2, 4, 8,10, 12];


Array.prototype.myReduce = function (callback, initialValue){
  let accumulator = initialValue;
  for(let index = 0; index< this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
}


console.log (arr.myReduce((acc, value)=> acc + value, 1));
