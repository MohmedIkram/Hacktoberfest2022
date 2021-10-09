var count = 1;
var countprice = 77.89;

var countEl = document.getElementById("num-count");
var priceEl = document.getElementById("priceValueCount");
var quantityEl = document.getElementById("quantity");

priceEl.innerHTML = 'total = ' + countprice;
quantityEl.innerHTML = 'quantity = ' + count;

function addCount() {
  if (count < 4) {
    count++;
    countEl.value = count;
    let a = countEl.value;
    let x = countprice * a;
    priceEl.innerHTML = 'total = ' + x;
    quantityEl.innerHTML = 'quantity = ' + count;
  }
}

function minusCount() {
  if (count > 1) {
    count--;
    countEl.value = count;
    let a = countEl.value;
    let x = countprice * a;
    priceEl.innerHTML = 'total = ' +x;
    quantityEl.innerHTML = 'quantity = ' + count;
  }
}