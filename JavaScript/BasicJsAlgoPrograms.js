//created by junaid shah (github.com/jsh854)

//Find the First repeating value from the string

function getRepeatingElement(str) {
  let newStr = new Set(str);
  let newStrArr = [...newStr];
  for (let j in str) {
    if (newStrArr[j] !== str[j]) {
      return console.log(`repeating element is ${str[j]}`);
    }
  }
}
let string = "Facebook";
getRepeatingElement(string);

//Check if its a Anagram

let firstItem = "Mary";
let secondItem = "Armys";

function checkAnagram(i, j) {
  let one = i.toLowerCase();
  let two = j.toLowerCase();
  const itemOne = one.split("").sort().join("");
  const itemTwo = two.split("").sort().join("");

  return itemOne === itemTwo;
}

console.log(checkAnagram(firstItem, secondItem));

//linear search using js

let items = [1, 2, 3, 7, 8, 9, 11];
function linearSearch(number) {
  for (i of items) {
    if (i === number) {
      console.log(i);
      break;
    }
  }
}

linearSearch(1);
