const messageElement = document.getElementById("message");
const randomNumber = getRandomNumber();

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.start();

// Functions
function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

function processMessage(e) {
  const message = e.results[0][0].transcript;
  interpretMessage(message);
  checkGuess(message);
}

function interpretMessage(message) {
  messageElement.innerHTML = `
    <div>You said: </div>
    <span class="number-box">${message}</span> 
  `;
}

function checkGuess(message) {
  const number = +message;
  if (Number.isNaN(number)) {
    messageElement.innerHTML += `<div>That's not a valid number. Please try again.</div>`;
    return;
  }
  if (number > 50 || number < 1) {
    messageElement.innerHTML += `<div>The number must be between 1 and 50!</div>`;
    return;
  }
  if (number === randomNumber) {
    document.body.innerHTML = `
      <h2>Well done! You have guessed correctly! <br><br>It was ${number}.</h2>
      <button id="play-again-btn" class="play-again-btn">Play Again</button>
    `;
  } else if (number > randomNumber) {
    messageElement.innerHTML += "<div>GO LOWER</div>";
  } else {
    messageElement.innerHTML += "<div>GO HIGHER</div>";
  }
}

// Event Listeners
recognition.addEventListener("result", processMessage);
recognition.addEventListener("end", () => recognition.start());
document.body.addEventListener("click", (e) => {
  if ((e.target.id = "play-again")) {
    window.location.reload();
  }
});
