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

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper or scissors.");

    return userInput
}



function capitalise(string) {
    let firstLetter = string[0].toUpperCase();
    let remainingLetters = string.slice(1).toLowerCase();

    return firstLetter + remainingLetters
}

function playRound(event) {
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.textContent;
    let loseMessage = `You lose! ${capitalise(computerChoice)} beats ${humanChoice.toLowerCase()}.`;
    let winMessage = `You win! ${capitalise(humanChoice)} beats ${humanChoice.toLowerCase()}.`;
    let drawMessage = "It's a draw!";

    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "paper") {
            computerScore ++;
            console.log(loseMessage);
        }

        else if (computerChoice === "scissors") {
            humanScore ++;
            console.log(winMessage);
        }

        else {
            console.log(drawMessage);
        }
    }

    else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            computerScore ++;
            console.log(loseMessage);
        }

        else if (computerChoice === "paper") {
            humanScore ++;
            console.log(winMessage);
        }

        else {
            console.log(drawMessage);
        }
    }

    else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "scissors") {
            computerScore ++;
            console.log(loseMessage);
        }

        else if (computerChoice === "rock") {
            humanScore ++;
            console.log(winMessage);
        }

        else {
            console.log(drawMessage);
        }
    }
}



let humanScore = 0;
let computerScore = 0;

btn = document.querySelectorAll("button");
btn.forEach(button => {
    button.addEventListener('click', playRound);    
});

score = document.createElement('div');

