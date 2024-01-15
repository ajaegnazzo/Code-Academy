let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

function compareGuesses(currentHumanGuess, computerGuess, target) {
    return Math.abs(currentHumanGuess - target) <= Math.abs(computerGuess - target);
}

function updateScore(currentHumanGuess, computerGuess) {
    if (compareGuesses(currentHumanGuess, computerGuess, generateTarget())) {
        computerScore++;
    } else {
        humanScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}