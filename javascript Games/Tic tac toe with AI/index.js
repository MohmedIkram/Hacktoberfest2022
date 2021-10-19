let gameActive = true;
let currentPlayer = "x";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const statusDisplay = document.querySelector(".game--status");
const AIDisplay = (cellIndex, currentPlayer) =>
  (document.getElementById(`${cellIndex}`).innerHTML = currentPlayer);
const winningMessage = () =>
  `${currentPlayer === "x" ? "Player" : "COM"} has won!`;
const drawMessage = () => `Game ended in a draw!`;

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );
  // console.log(clickedCellIndex);
  for (let i = 0; i < 9; i++) {
    if (gameState[i] !== "" || !gameActive) {
      break;
    }
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
  handleAI(clickedCell, clickedCellIndex);
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handleAI(clickedCell, clickedCellIndex) {
  currentPlayer = "o";
  let clickedIndex = clickedCellIndex;
  for (let i = 0; i < 7; i++) {
    const AICondition = winningConditions[i];
    let a = AICondition[0];
    let b = AICondition[1];
    let c = AICondition[2];
    if (a == clickedIndex || b == clickedIndex || c == clickedIndex) {
      if (gameState[AICondition[0]] === "") {
        gameState[AICondition[0]] = gameState[AICondition[0]].replace(
          "",
          `${currentPlayer}`
        );
        AIDisplay(AICondition[0], currentPlayer);
        handleResultValidation();
        break;
      } else if (gameState[AICondition[1]] === "") {
        gameState[AICondition[1]] = gameState[AICondition[1]].replace(
          "",
          `${currentPlayer}`
        );
        AIDisplay(AICondition[1], currentPlayer);
        handleResultValidation();
        break;
      } else if (gameState[AICondition[2]] === "") {
        gameState[AICondition[2]] = gameState[AICondition[2]].replace(
          "",
          `${currentPlayer}`
        );
        AIDisplay(AICondition[2], currentPlayer);
        handleResultValidation();
        break;
      }
    } else {
      continue;
    }
  }
}

function handleResultValidation() {
  let roundWon = false;
  console.log(gameState);
  console.log("gameState");
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      a === "x" ? (currentPlayer = "x") : (currentPlayer = "o");
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  handlePlayerChange();
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "x";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = "";
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
  
document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame);
