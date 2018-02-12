// Game values
let min = 1;
let max = 10;
let winningNum = getNumber(min, max);
let guessesLeft = 3;

// UI Elements
const $game = document.querySelector("#game");
const $minNum = document.querySelector(".min-num");
const $maxNum = document.querySelector(".max-num");
const $guessBtn = document.querySelector("#guess-btn");
const $guessInput = document.querySelector("#guess-input");
const $message = document.querySelector(".message");

// Assign UI min and max
$minNum.textContent = min;
$maxNum.textContent = max;

// getNumber()
function getNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  $message.style.color = color;
  $message.textContent = msg;
}

// Game over
function gameOver(won, msg) {
	// Set border color
	let color = won ? 'green' : 'red';
	// Disable input
	$guessInput.disabled = true;
	// Change border color
	$guessInput.style.borderColor = color;
	// Set message
	setMessage(msg, color);
	// Play again
	$guessBtn.value = 'Play again';
	$guessBtn.className = 'play-again';
}

// Listen for guess
$guessBtn.addEventListener("click", () => {
  let guess = parseInt($guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
		// Game over - Won
		gameOver(true, `${winningNum} is correct! You win`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
			// Game over - Lost
			gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong
      // Change border color
			$guessInput.style.borderColor = "red";
			// Clear input
			$guessInput.value = '';
			// Set message
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Play again event listener
$game.addEventListener('mousedown', (e) => {
	if(e.target.className === 'play-again') {
		window.location.reload();
	}
});
