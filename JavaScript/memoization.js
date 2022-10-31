let cache = {
  5: 85, //like this it gonna happen
};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}
addTo80(5);
addTo80(6);
