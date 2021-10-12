document.getElementById('btn0').addEventListener('click', function () {
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function () {
  document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve) {
  var btn = eve.target;
  document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

document.getElementById('btnClr').onclick = function () {
  (document.getElementById('res').innerHTML) = "";
};
