const randomNumber = parseInt(Math.random() * 99 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#number");
const previousGuess = document.querySelector(".p_guess");
const remainingGuess = document.querySelector(".r_guess");
const message = document.querySelector(".message");
const guessCount = document.querySelector(".guess-count");
const main = document.querySelector("main");

const div = document.createElement("div");

let prevGuess = [];
let remGuess = 0;

let playGame = true;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (playGame) {
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  }
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    userInput.value = "";
    alert("Please enter a number more than 0.");
  } else if (guess > 99) {
    userInput.value = "";
    alert("Please enter a number less than 100.");
  } else {
    prevGuess.push(guess);
    if (remGuess === 9) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      matchGuess(guess);
    }
  }
}

function matchGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `&#127881 You guessed it right. Random number is ${randomNumber} &#127881`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("&#128542 Guess a higher number &#128542");
  } else if (guess > randomNumber) {
    displayMessage("&#128542 Guess a lower number &#128542");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess}, `;
  remGuess++;
  remainingGuess.innerHTML = `${10 - remGuess}`;
}

function displayMessage(msg) {
  message.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  div.classList.add("button");
  div.innerHTML = `<span id="new-game">Start New Game</span>`;
  guessCount.remove();
  main.appendChild(div);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#new-game");
  newGame.addEventListener("click", function () {
    location.reload();
  });
}
