let string = "";
const reverseString = (s) => {
  if(s.length=== 0) return "";
  let rest = s.slice(1);
  return reverseString(rest) + s[0]
};
//test

console.log(reverseString("string"))