console.log('js loaded');
let ren = Math.floor(Math.random() * 17 + 1);
let num = Math.floor(Math.random() * 3 + 1) + parseInt(ren);
let ren2 = (document.querySelector('.hint').innerHTML += ' : Its close to ' + num);
//answer rem me hai

console.log(ren2);
console.log(ren);

function result(ctr) {
	ctr = 0;

	let n1 = document.getElementById('inputbox').value;

	if (ren == n1) {
		let c = 'BRAVO YOU ARE PRO';

		document.querySelector('.output').innerHTML = c;
		ctr++;
	} else if (n1 + 1 == ren || n1 - 1 == ren) {
		let c = 'NOICE YOU NEARLY GUESSED IT';

		document.querySelector('.output').innerHTML = c;
		ctr++;
	} else {
		let c = 'YOUR ARE NOOB';

		document.querySelector('.output').innerHTML = c;
		ctr++;
	}

	if (ctr > 0) {
		if (document.querySelector('.output').innerHTML != 'This is a result') {
			setTimeout(function() {
				window.location.reload(1);
			}, 5000);
		}
	}
}

// console.log(op);
