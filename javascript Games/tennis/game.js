var canvas, canvasContext;

var ballX = 0;
var ballXSpeed = 10;
var ballY = 50;
var ballYSpeed = 5;

const BAT_HEIGHT = 100;
const BAT_THICK = 10;
var bat1Y = 250;
var bat2Y = 250;

var player1Score = 0;
var player2Score = 0;
const WIN_SCORE = 5;
var resultScreen = false;
var result = "";

//window loaded
window.onload = function (){
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");


    var FPS = 30;
    setInterval(function() {
        moveElements();
        drawCanvas();
    }, 1000/FPS);

    canvas.addEventListener("mousemove",
    function(event) {
        var mousePosition = findMousePosition(event);
        bat2Y = mousePosition.y -(BAT_HEIGHT/2);
    });

    canvas.addEventListener("mousedown", mouseClick);
}

//canvas
function drawCanvas() {
    
    createRectangle(0, 0, canvas.width, canvas.height, "#155989"); //full canvas
    if(resultScreen){
        canvasContext.fillStyle = "white";
        canvasContext.fillText(`Game Over`, (canvas.width/2)-20, (canvas.height/2)-20);
        canvasContext.fillText(`- ${result} -`, (canvas.width/2)-20, (canvas.height/2)+20);
        canvasContext.fillText("click to continue", (canvas.width/2)-20, (canvas.height)-100);
        return;
    }

    createNet();
    createRectangle(0, bat1Y, BAT_THICK, BAT_HEIGHT, "#333331"); //bat1
    createRectangle(canvas.width-BAT_THICK, bat2Y, BAT_THICK, BAT_HEIGHT, "#333331"); //bat2
    createBall(ballX, ballY, 10, "#D9ED68"); //ball

    canvasContext.fillText(player1Score, 100, 50); //score1
    canvasContext.fillText(player2Score, canvas.width-100, 50); //score2
    
}

//play
function moveElements() {
    if(resultScreen){
        return;
    }

    botBat(); //computer player
    ballX += ballXSpeed; //horizontal
    ballY += ballYSpeed; //vertical
    
    //go left
    if (ballX >= canvas.width) {
        if (ballY > bat2Y && ballY < bat2Y + BAT_HEIGHT) {
            //ballXSpeed += 0.1; //speed? 
            ballXSpeed = -ballXSpeed;

            var hitPosition = ballY - (bat2Y + BAT_HEIGHT/2);
            ballYSpeed = hitPosition * 0.25;
        } else {
            player1Score++;
            reset();
        }
    }
    //go right
    if (ballX <= 0) {
        if (ballY > bat1Y && ballY < bat1Y + BAT_HEIGHT) {
            ballXSpeed -= 0.1; //speed? when bot++
            ballXSpeed = -ballXSpeed;

            var hitPosition = ballY - (bat1Y + BAT_HEIGHT/2);
            ballYSpeed = hitPosition * 0.25;
        } else {
            player2Score++;
            reset();
        }
    }
    //go up
    if (ballY >= canvas.height) {
        ballYSpeed = -ballYSpeed;
    }
    //go down
    if (ballY <= 0) {
        ballYSpeed = -ballYSpeed;
    }
}

//bat1 auto movement
function botBat() {
    var botBatCenter = bat1Y + (BAT_HEIGHT/2);

    if(botBatCenter < ballY-47) { //increase to increase speed
        bat1Y += 12; //down
    } else if(botBatCenter > ballY+47){
        bat1Y -= 12; //up
    }
}

//get mouse position for bat control
function findMousePosition(event){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = event.clientX - rect.left - root.scrollLeft;
    var mouseY = event.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}

//create each elements

function createRectangle(leftX, topY, width, height, color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}

function createBall(centerX, centerY, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true); //0 to 360 c.clock
    canvasContext.fill();
}

function createNet() {
    for (let i = 0; i < canvas.height; i+=40) {
        createRectangle(canvas.width/2-1, i, 1, 15, "white");
        
    }
}

//reset to net, if missed
function reset() {
    if(player1Score >= WIN_SCORE || player2Score >= WIN_SCORE){
        player1Score>player2Score? result="YOU LOSE":result="YOU WIN";
        resultScreen = true;
    }

    ballXSpeed = -ballXSpeed; //reverse direction after each reset
    ballX = canvas.width/2;
    ballY = canvas.height/2;
    //bat1Y = canvas.height/2; //avoid missing - reset bot to center 
}

//click to continue
function mouseClick(event) {
    if(resultScreen){
        player1Score = 0;
        player2Score = 0;
        resultScreen = false; //restart
    }
}