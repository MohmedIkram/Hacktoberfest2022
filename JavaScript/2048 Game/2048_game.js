var cellArr = document.getElementsByClassName("cell");
var numArr = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function moveNum(obj) {
	switch (obj.getAttribute("id")) {
		case "ArrowUp": up(); break; //up
		case "ArrowDown": down(); break; //down
		case "ArrowLeft": left(); break;//left
		case "ArrowRight": right(); break; //right
	}
}


function init() {
	for (var i = 0; i < 16; i++) {
		cellArr[i].innerHTML = "";
		numArr[i] = 0;
	}
	var score = document.getElementById("score");
	score.innerHTML = 0;

	randomNum();
	randomNum();
}

function start() {
	document.getElementById("intro").style.display = 'none';
	document.getElementById("gamearea").style.display = 'block';
	init();
}

function end() {
	var score = document.getElementById("score").innerHTML;
	var bestScore = document.getElementById("bestScore").innerHTML;

	alert("score : " + score);

	if (parseInt(bestScore) < parseInt(score)) {
		localStorage.removeItem("2048_best_score");
		localStorage.setItem("2048_best_score", score);
		document.getElementById("bestScore").innerHTML = score;
	}



	document.getElementById("intro").style.display = 'block';
	document.getElementById("gamearea").style.display = 'none';
	document.getElementById("score").innerHTML = "0";
}

function randomNum() {
	var done = false;
	while (done == false) {
		var num = Math.floor(Math.random() * 16);
		if (numArr[num] == 0) {
			numArr[num] = getNewNum();
			done = true;
		}
	}
	setNum();
}

function getNewNum() {
	var rand = parseInt(Math.random() * 10);
	if (rand == 0) return 4;
	return 2;
}

function setNum() {
	for (var i = 0; i < 16; i++) {
		cellArr[i].innerHTML = numArr[i] != 0 ? numArr[i] : "";
		setCellStyle(cellArr[i]);
	}
}

function setCellStyle(cell) {
	var cellNum = parseInt(cell.innerHTML);
	switch (cellNum) {
		case 2:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#CBDDF5";
			break;
		case 4:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#B1CCF0";
			break;
		case 8:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#98BBEB";
			break;
		case 16:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#7EAAE6";
			break;
		case 32:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#6499E1";
			break;
		case 64:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#4B89DC";
			break;
		case 128:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#447CC7";
			break;
		case 256:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#3D6FB3";
			break;
		case 512:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#36629E";
			break;
		case 1024:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#203A5E";
			break;
		case 2048:
			cell.style.color = "#FFFFFF";
			cell.style.background = "#15273E";
			break;
		default:
			if (cellNum > 2048) {
				cell.style.color = "#FFFFFF";
				cell.style.background = "#0A131F";
			}
			else {
				cell.style.color = "#684A23";
				cell.style.background = "#E5EEFA";
			}
			break;
	}
}

function right() {
	var isMoved = false;
	var access = false;
	var k;
	var score = document.getElementById("score");
	//fixed
	for (var i = 14; i > 0; i -= 4) {
		access = false;
		for (var j = i; j >= i - 2; j--) {
			if (numArr[j] != 0) {
				k = j;
				while (k < (i + 1) && (numArr[k + 1] == numArr[k] || numArr[k + 1] == 0)) {
					if (numArr[k + 1] == numArr[k] && access == false) {
						numArr[k + 1] = numArr[k + 1] + numArr[k];
						score.innerHTML = numArr[k + 1] + parseInt(score.innerHTML);
						numArr[k] = 0;
						isMoved = true;
						access = true;
					} else if (numArr[k + 1] == numArr[k] && access == true) {
						access == false;
					} else if (numArr[k + 1] == 0) {
						numArr[k + 1] = numArr[k];
						numArr[k] = 0;
						isMoved = true;
					}
					k++;
				}
			}
		}

	}

	setNum();

	if (isMoved) {
		randomNum();
	} else {
		check();
	}
}

function left() {
	var isMoved = false;
	var access = false;
	var k;
	var score = document.getElementById("score");
	for (var i = 13; i > 0; i -= 4) {
		access = false;
		for (var j = i; j <= i + 2; j++) {
			if (numArr[j] != 0) {
				k = j;
				while (k > (i - (i % 4)) && (numArr[k - 1] == numArr[k] || numArr[k - 1] == 0)) {
					if (numArr[k - 1] == numArr[k] && access == false) {
						numArr[k - 1] = numArr[k - 1] + numArr[k];
						numArr[k] = 0;
						isMoved = true;
						access = true;
						score.innerHTML = numArr[k - 1] + parseInt(score.innerHTML);
					}
					else if (numArr[k - 1] == numArr[k] && access == true) {
						access == false;
					}
					else if (numArr[k - 1] == 0) {
						numArr[k - 1] = numArr[k];
						numArr[k] = 0;
						isMoved = true;
					}
					k -= 1;
				}
			}
		}

	}

	setNum();
	if (isMoved) {
		randomNum();
	} else {
		check();
	}
}

function down() {
	var isMoved = false;
	var access = false;
	var k;
	var score = document.getElementById("score");
	for (var i = 11; i > 7; i -= 1) {
		access = false;
		for (var j = i; j >= 0; j = j - 4) {
			if (numArr[j] != 0) {
				k = j;
				while (k < 12 && (numArr[k + 4] == numArr[k] || numArr[k + 4] == 0)) {
					if (numArr[k + 4] == numArr[k] && access == false) {
						numArr[k + 4] = numArr[k + 4] + numArr[k];
						numArr[k] = 0;
						isMoved = true;
						access = true;
						score.innerHTML = numArr[k + 4] + parseInt(score.innerHTML);
					} else if (numArr[k + 4] == numArr[k] && access == true) {
						access == false;
					} else if (numArr[k + 4] == 0) {
						numArr[k + 4] = numArr[k];
						numArr[k] = 0;
						isMoved = true;
					}
					k += 4;
				}
			}
		}
	}

	setNum();

	if (isMoved) {
		randomNum();
	} else {
		check();
	}
}

function up() {
	var isMoved = false;
	var access = false;
	var k;
	var score = document.getElementById("score");
	for (var i = 7; i > 3; i -= 1) {
		access = false;
		for (var j = i; j < (i + 9); j += 4) {
			if (numArr[j] != 0) {
				k = j;
				while (k >= i && (numArr[k - 4] == numArr[k] || numArr[k - 4] == 0)) {
					if (numArr[k - 4] == numArr[k] && access == false) {
						numArr[k - 4] = numArr[k - 4] + numArr[k];
						numArr[k] = 0;
						isMoved = true;
						access = true;
						score.innerHTML = numArr[k - 4] + parseInt(score.innerHTML);
					}
					else if (numArr[k - 4] == numArr[k] && access == true) {
						access == false;
					}
					else if (numArr[k - 4] == 0) {
						numArr[k - 4] = numArr[k];
						numArr[k] = 0;
						isMoved = true;
					}
					k -= 4;
				}
			}
		}
	}

	setNum();

	if (isMoved) {
		randomNum();
	} else {
		check();
	}
}

function check() {
	var x = false;
	for (var i = 0; i < 16; i++) {
		switch (i) {
			case (0):
				if (numArr[0] == numArr[1] || numArr[0] == numArr[4]) {
					x = true;
				};
				break;
			case (1):
				if (numArr[1] == numArr[0] || numArr[1] == numArr[2] || numArr[1] == numArr[5]) {
					x = true;
				};
				break;
			case (2):
				if (numArr[2] == numArr[1] || numArr[2] == numArr[3] || numArr[2] == numArr[6]) {
					x = true;
				};
				break;
			case (3):
				if (numArr[3] == numArr[2] || numArr[3] == numArr[7]) {
					x = true;
				};
				break;
			case (4):
				if (numArr[4] == numArr[0] || numArr[4] == numArr[5] || numArr[4] == numArr[8]) {
					x = true;
				};
				break;
			case (5):
				if (numArr[5] == numArr[1] || numArr[5] == numArr[4] || numArr[5] == numArr[6] || numArr[5] == numArr[9]) {
					x = true;
				};
				break;
			case (6):
				if (numArr[6] == numArr[2] || numArr[6] == numArr[5] || numArr[6] == numArr[7] || numArr[6] == numArr[10]) {
					x = true;
				};
				break;
			case (7):
				if (numArr[7] == numArr[3] || numArr[7] == numArr[6] || numArr[7] == numArr[11]) {
					x = true;
				};
				break;
			case (8):
				if (numArr[8] == numArr[4] || numArr[8] == numArr[9] || numArr[8] == numArr[12]) {
					x = true;
				};
				break;
			case (9):
				if (numArr[9] == numArr[5] || numArr[9] == numArr[8] || numArr[9] == numArr[10] || numArr[9] == numArr[13]) {
					x = true;
				};
				break;
			case (10):
				if (numArr[10] == numArr[6] || numArr[10] == numArr[9] || numArr[10] == numArr[11] || numArr[10] == numArr[14]) {
					x = true;
				};
				break;
			case (11):
				if (numArr[11] == numArr[7] || numArr[11] == numArr[10] || numArr[11] == numArr[15]) {
					x = true;
				};
				break;
			case (12):
				if (numArr[12] == numArr[8] || numArr[12] == numArr[13]) {
					x = true;
				};
				break;
			case (13):
				if (numArr[13] == numArr[9] || numArr[13] == numArr[12] || numArr[13] == numArr[14]) {
					x = true;
				};
				break;
			case (14):
				if (numArr[14] == numArr[10] || numArr[14] == numArr[13] || numArr[14] == numArr[15]) {
					x = true;
				};
				break;
			case (15):
				if (numArr[15] == numArr[11] || numArr[15] == numArr[14]) {
					x = true;
				};
				break;
		}

		if (numArr[i] == 0) {
			x = true;
			break;
		}
	}
	if (!x) {
		end();
	}
}
