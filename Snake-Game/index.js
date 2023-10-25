let board = document.getElementById('board')
let scoreCont = document.getElementById('score')
let maxScoreCont = document.getElementById('maxScoreCont');
let HeadEle;
// console.log(HeadEle);
let inputDir = { x: 0, y: 0 };

const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameOver.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 5;
let maxScore;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
let food = {
    x: 6, y: 7
};

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < (1 / speed)) {
        return;
    }
    // console.log(ctime);
    lastPaintTime = ctime;
    gameEngine();
    // console.log(ctime);
}
function isCollide(snake) {
    // return false;
    //if you into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }

    }
    if (snake[0].x > 18 || snake[0].x < 0 || snake[0].y > 18 || snake[0].y < 0) {
        return true;
    }
}
function gameEngine() {
    //part1: updating the snake array and food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        let maxi = localStorage.getItem('maxScore');
        if (maxi == 'undefined' || maxi == 'null') {
            localStorage.setItem('maxScore', score);
        }
        else if (maxi != 'undefined' || maxi != 'null') {
            maxi = Math.max(maxi, score);
            localStorage.setItem('maxScore', maxi);
            maxScoreCont.innerHTML = "Max Score: " + maxi;
        }
        alert("Game over. Press any key to play again");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
        scoreCont.innerHTML = "Score: " + score;
        // musicSound.play();
    }

    //IF you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        // console.log("food")
        foodSound.play();
        score += 1;

        scoreCont.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        // console.log(snakeArr)
        let a = 2;
        let b = 16;
        food = { x: 2 + Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    //Moving the snake
    // console.log("-----")
    // console.log(snakeArr.l)
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        // const element = array[i];
        // console.log("hello");
        snakeArr[i + 1] = { ...snakeArr[i] };
        // console.log(snakeArr[i + 1].x);

    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //part2: display the snake and food
    //display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            eyes = document.createElement('div');
            eyes.classList.add('eyes');
            eyes2 = document.createElement('div');
            eyes2.classList.add('eyes');
            snakeElement.classList.add('head');
            // HeadEle = document.querySelectorAll('.head');
            // console.log(e.x, e.y, typeof e.x, typeof e.y)
            if (inputDir.x === 0 && inputDir.y === -1) {
                snakeElement.style.setProperty('--top', '15%');
                snakeElement.style.setProperty('--bottom', '75%');
                snakeElement.style.setProperty('--left', '2%');
                snakeElement.style.setProperty('--right', '2%');
                snakeElement.style.setProperty('--direction', 'row');
            }
            else if (inputDir.x === 0 && inputDir.y === 1) {
                snakeElement.style.setProperty('--top', '75%');
                snakeElement.style.setProperty('--bottom', '15%');
                snakeElement.style.setProperty('--left', '2%');
                snakeElement.style.setProperty('--right', '2%');
                snakeElement.style.setProperty('--direction', 'row');
            }
            else if (inputDir.x === -1 && inputDir.y === 0) {
                snakeElement.style.setProperty('--top', '2%');
                snakeElement.style.setProperty('--bottom', '2%');
                snakeElement.style.setProperty('--left', '15%');
                snakeElement.style.setProperty('--right', '75%');
                snakeElement.style.setProperty('--direction', 'column');
            }
            else if (inputDir.x === 1 && inputDir.y === 0) {
                snakeElement.style.setProperty('--top', '2%');
                snakeElement.style.setProperty('--bottom', '2%');
                snakeElement.style.setProperty('--left', '75%');
                snakeElement.style.setProperty('--right', '15%');
                snakeElement.style.setProperty('--direction', 'column');
            }
            board.appendChild(snakeElement);
            snakeElement.appendChild(eyes);
            snakeElement.appendChild(eyes2);
        }
        else {
            snakeElement.classList.add('snake');
            board.appendChild(snakeElement)
        }
    })

    //part2: display the snake

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}










//Main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    // inputDir = { x: 0, y: 1 } //start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;

            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;

            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;

            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});

function maxScorefunc() {
    let maxScore = localStorage.getItem('maxScore');
    if (maxScore == undefined || maxScore == null) {
        return;
    }
    else {
        maxScoreCont.innerHTML = "Max Score: " + maxScore;
    }
}
maxScorefunc();
