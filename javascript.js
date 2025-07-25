function getComputerChoice() {
    let number = Math.random()

    if (number >= 0.5) {
        return "rock"
    } 
    else if (number < 0.5 && number != 0) {
        return "paper"
    }
    return "scissors"
}


function capitalise(string) {
    let firstLetter = string[0].toUpperCase();
    let remainingLetters = string.slice(1).toLowerCase();

    return firstLetter + remainingLetters
}

function playRound(event) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    const humanChoice = event.target.textContent;
    let loseMessage = `You lose! ${capitalise(computerChoice)} beats ${humanChoice.toLowerCase()}.`;
    let winMessage = `You win! ${capitalise(humanChoice)} beats ${computerChoice.toLowerCase()}.`;
    let drawMessage = "It's a draw!";

    computerSelectedChoice.textContent = `Computer played ${computerChoice}.`;

    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            gameResult.textContent = loseMessage;
        }

        else if (computerChoice === "scissors") {
            humanScore ++;
            gameResult.textContent = winMessage;
        }

        else {
            gameResult.textContent = drawMessage;
        }
    }

    else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            computerScore ++;
            gameResult.textContent = loseMessage;
        }

        else if (computerChoice === "paper") {
            humanScore ++;
            gameResult.textContent = winMessage;
        }

        else {
            gameResult.textContent = drawMessage;
        }
    }

    else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "scissors") {
            computerScore ++;
            gameResult.textContent = loseMessage;
        }

        else if (computerChoice === "rock") {
            humanScore ++;
            gameResult.textContent = winMessage;
        }

        else {
            gameResult.textContent = drawMessage;
        }
    }

    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    if (humanScore === 5){
        winner.textContent = "You are the winner! Congratulations!"
        gameOver = true;
        playAgainBtn.style.display = "inline-block";
    }
    else if (computerScore === 5) {
        winner.textContent = "The computer wins! Try again next time."
        gameOver = true;
        playAgainBtn.style.display = "inline-block";
    }
}

function clearHistory() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    gameResult.textContent = "";
    winner.textContent = "";
    computerSelectedChoice.textContent = "";
    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    playAgainBtn.style.display = "none";
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const gameResult = document.querySelector(".game-result");
const computerSelectedChoice = document.querySelector(".computer-choice");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");
const playAgainBtn = document.querySelector("#play-again");

btn = document.querySelectorAll("button");
btn.forEach(button => {
    if (button !== playAgainBtn) {
    button.addEventListener('click', playRound);
    }    
});

playAgainBtn.addEventListener('click', clearHistory);


