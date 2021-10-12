// dom selectors and variables
const gridDisplay = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.querySelector('.result');
const startButton = document.querySelector('.start-button');
const width = 4;
let squares = [];
let colors = ["#B67162", "#B85C38", "#5C3D2E", "#2D2424","#CF0000","#890596","#1CC5DC","#FDCA40","#FDCA40","#FB3640","#7ECA9C","#9EDE73"];
let whiteColor = "#fff";
let defaultBackground = "#eeedddba";
let blackColor = "#11121100";
let score = 0;

// functions
//function to generate all the squares 
const createSquares = () => {
    for (let i = 0; i < width * width; i++) {
        let square = document.createElement('div');
        square.innerHTML = 0;
        gridDisplay.appendChild(square);
        squares.push(square);
    }
    generate2Randomly();
    generate2Randomly();
}

// function to assign colors to squares
const assignColorsToSquares = (square) => {
    if (square.innerHTML == 2) {
        square.style.background = colors[0];
        square.style.color = whiteColor;
    } else if(square.innerHTML == 4) {
        square.style.background = colors[1];
        square.style.color = whiteColor;
    } else if(square.innerHTML == 8) {
        square.style.background = colors[2];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 16) {
        square.style.background = colors[3];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 32) {
        square.style.background = colors[4];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 64) {
        square.style.background = colors[5];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 128) {
        square.style.background = colors[6];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 256) {
        square.style.background = colors[7];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 512) {
        square.style.background = colors[8];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 1024) {
        square.style.background = colors[9];
        square.style.color = whiteColor;
    }else if(square.innerHTML == 2048) {
        square.style.background = colors[10];
        square.style.color = whiteColor;
    }else {
        square.style.background = defaultBackground;
        square.style.color = blackColor;
    }
}

// function to generate 2 randomly in a random square in board
const generate2Randomly = () => {
    // this random number is for random square
    let randomNumber = Math.floor(Math.random() * squares.length);
    // if the square has 0 then it will get a 2 
    if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = 2;
        assignColorsToSquares(squares[randomNumber]);
        checkForLoss();
    } else {
        generate2Randomly();
    }
}

// function to move squares right in a row
const moveRight = () => {
    for (let i = 0; i < 16; i++) {
        // finding the row
        if (i % 4 === 0) {
            let totalsInaRow = [];
            // getting the inner contents of squares in a row
            for (let j = 0; j < 4; j++) {
                totalsInaRow.push(parseInt(squares[i + j].innerHTML));
            }
            console.log(totalsInaRow);
            // let totalOne = parseInt(squares[i].innerHTML);
            // let totalTwo = parseInt(squares[i + 1].innerHTML);
            // let totalThree = parseInt(squares[i + 2].innerHTML);
            // let totalFour = parseInt(squares[i + 3].innerHTML);
            // let row = [totalOne, totalTwo, totalThree, totalFour];
            // console.log(row);
            //filtering the number in a row
            let filteredRow = totalsInaRow.filter(num => num);
            // console.log(filteredRow);
            // finding missing numbers in a row
            let missingNumbers = 4 - filteredRow.length;
            // we will create array of zeros based on no of missingnumbers
            let zeros = Array(missingNumbers).fill(0);
            // console.log(zeros);
            // attaching zeros to filtered numbers in a new row so this will give the feel for swiping the number to the right
            let newRow = zeros.concat(filteredRow);
            // console.log(newRow);

            for (let j = 0; j < 4; j++) {
                squares[i + j].innerHTML = newRow[j];
                assignColorsToSquares(squares[i + j]);
            }
        }
    }
}

// function to move squares left in a row
const moveLeft = () => {
    for (let i = 0; i < 16; i++) {
        // finding the row
        if (i % 4 === 0) {
            let totalsInaRow = [];
            // getting the inner contents of squares in a row
            for (let j = 0; j < 4; j++) {
                totalsInaRow.push(parseInt(squares[i + j].innerHTML));
            }
            //filtering the number in a row
            let filteredRow = totalsInaRow.filter(num => num);
            // finding missing numbers in a row
            let missingNumbers = 4 - filteredRow.length;
            // we will create array of zeros based on no of missingnumbers
            let zeros = Array(missingNumbers).fill(0);
            let newRow = filteredRow.concat(zeros);
            // console.log(newRow);
            for (let j = 0; j < 4; j++) {
                squares[i + j].innerHTML = newRow[j];
                assignColorsToSquares(squares[i + j]);
            }
        }
    }
}

// function to move squares down in a column
const moveDown = () => {
    for (let i = 0; i < 4; i++) {
        let totalsInAColumn = [];
        // column elements are 0,5,9,13 difference is +4
        for (let j = 0; j < 4; j++) {
            totalsInAColumn.push(parseInt(squares[i + width * j].innerHTML));
        }
        let filteredColumn = totalsInAColumn.filter(num => num);
        let missingNumbers = 4 - filteredColumn.length;
        let zeros = Array(missingNumbers).fill(0);
        let newColumn = zeros.concat(filteredColumn);
        for (let j = 0; j < 4; j++) {
            squares[i + width * j].innerHTML = newColumn[j];
            assignColorsToSquares(squares[i + width * j]);
        }
    }
}

// function to move squares up in a column
const moveUp = () => {
    for (let i = 0; i < 4; i++) {
        let totalsInAColumn = [];
        // column elements are 0,5,9,13 difference is +4
        for (let j = 0; j < 4; j++) {
            totalsInAColumn.push(parseInt(squares[i + width * j].innerHTML));
        }
        let filteredColumn = totalsInAColumn.filter(num => num);
        let missingNumbers = 4 - filteredColumn.length;
        let zeros = Array(missingNumbers).fill(0);
        let newColumn = filteredColumn.concat(zeros);
        for (let j = 0; j < 4; j++) {
            squares[i + width * j].innerHTML = newColumn[j];
            assignColorsToSquares(squares[i + width * j]);
        }
    }
}

// function to combine numbers in a row 
const combineNumbersInARow = () => {
    // here only loop upto 15 as 15 doesn't have anything next to it
    for (let i = 0; i < 15; i++) {
        // if the two adjacent numbers in a row are same add them
        if (squares[i].innerHTML === squares[i + 1].innerHTML) {
            let combinedTotalOfNumbers = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
            squares[i].innerHTML = combinedTotalOfNumbers;
            assignColorsToSquares(squares[i]);
            squares[i + 1].innerHTML = 0;
            assignColorsToSquares(squares[i + 1]);
            score += combinedTotalOfNumbers;
            scoreDisplay.innerHTML = score;
        }
    }
    checkForWin();
}

// function to combine nubers in a column
const combineNumbersInAColumn = () => {
    // here only loop upto 12 as 13 doesn't have anything below it
    for (let i = 0; i < 12; i++) {
        // if the two adjacent numbers in a row are same add them
        if (squares[i].innerHTML === squares[i + width].innerHTML) {
            let combinedTotalOfNumbers = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
            squares[i].innerHTML = combinedTotalOfNumbers;
            assignColorsToSquares(squares[i]);
            squares[i + width].innerHTML = 0;
            assignColorsToSquares(squares[i + width]);
            score += combinedTotalOfNumbers;
            scoreDisplay.innerHTML = score;
        }
    }
    checkForWin();
}

// assign keycodes 
const controlKeys = (e) => {
    // 39 is for arrowRight key and 68 is for d key
    if (e.keyCode === 39 || e.keyCode === 68) {
        rightKey();
    }
    // 37 is for arrowLeft and 65 is for a key
    else if (e.keyCode === 37 || e.keyCode === 65) {
        leftKey();
    }
    // 40 is for arrowDown and 83 is for s key
    else if (e.keyCode === 40 || e.keyCode === 83) {
        downKey();
    }
    // 38 is for arrowUp and 87 is for w key
    else if (e.keyCode === 38 || e.keyCode === 87) {
        upKey();
    }
}

const rightKey = () => {
    moveRight();
    combineNumbersInARow();
    moveRight();
    generate2Randomly();
}

const leftKey = () => {
    moveLeft();
    combineNumbersInARow();
    moveLeft();
    generate2Randomly();
}

const downKey = () => {
    moveDown();
    combineNumbersInAColumn();
    moveDown();
    generate2Randomly();
}

const upKey = () => {
    moveUp();
    combineNumbersInAColumn();
    moveUp();
    generate2Randomly();
}


// check for win when any one sqaure has reached 2048
const checkForWin = () => {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML == 2048) {
            resultDisplay.innerHTML = `You Won! You Scored: ${score}`;
            document.removeEventListener('keyup', controlKeys);
            startButton.style.display = "flex";
        }
    }
}

// check for loss when no zeros are left in board
const checkForLoss = () => {
    let zerosCount = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML == 0) { 
            zerosCount++;
        }
    }
    if (zerosCount === 0) {
        resultDisplay.innerHTML = `!!! GAME OVER !!! You Scored: ${score}`;
        document.removeEventListener('keyup', controlKeys);
        startButton.style.display = "flex";
    }
}

// function to resetGame 
const resetGame = () => {
    score = 0;
    scoreDisplay.innerHTML = score;
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = 0;
        assignColorsToSquares(squares[i]);
    }
    generate2Randomly();
    generate2Randomly();
}

// event listeners and function calls
document.addEventListener('DOMContentLoaded', () => {
    createSquares();
});

startButton.addEventListener('click', () => {
    resetGame();
    document.addEventListener('keyup', controlKeys);
    resultDisplay.innerHTML = "";
    startButton.style.display = "none";
});
