const winnerText = document.querySelector(".display-winner");
const humanHealth = document.querySelector(".hearts-human");
const computerHealth = document.querySelector(".hearts-computer");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

const choices = ["rock", "paper", "scissors"];
let scores = { computer: 0, human: 0, tie: 0 };
let roundsPlayed = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        scores.tie++;
        return "tie";
    }
    
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    if (winConditions[humanSelection] === computerSelection) {
        scores.human++;
        return "human";
    } else {
        scores.computer++;
        return "computer";
    }
}

function updateHealth() {
    humanHealth.textContent = "❤".repeat(5 - scores.computer);
    computerHealth.textContent = "❤".repeat(5 - scores.human);
}

function displayRoundWinner(result) {
    if (result === "human") {
        winnerText.textContent = "You won the round!";
        winnerText.setAttribute("style","color: green;");
    } else if (result === "computer") {
        winnerText.textContent = "Computer wins the round!";
        winnerText.setAttribute("style","color: red;");
    } else {
        winnerText.textContent = "You both tie this round!";
    }
}

function displayGameWinner() {
    if (scores.computer > scores.human) {
        winnerText.textContent = "Computer wins the game!";
        winnerText.setAttribute("style","color: red;");
    } else if (scores.computer < scores.human) {
        winnerText.textContent = "You won the game!";
        winnerText.setAttribute("style","color: green;");
    } else {
        winnerText.textContent = "It's a tie!";
    }
}

function askToPlayAgain() {
    setTimeout(() => {
        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            resetGame();
        }
    }, 100);
}

function resetGame() {
    scores = { computer: 0, human: 0, tie: 0 };
    roundsPlayed = 0;
    updateHealth();
    winnerText.textContent = "";
}

function handleChoice(humanSelection) {
    if (roundsPlayed >= 5) return;

    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    
    updateHealth();
    roundsPlayed++;

    if (roundsPlayed === 5) {
        displayGameWinner();
        askToPlayAgain();
    } else {
        displayRoundWinner(result);
    }
}

rockButton.addEventListener("click", () => handleChoice("rock"));
paperButton.addEventListener("click", () => handleChoice("paper"));
scissorButton.addEventListener("click", () => handleChoice("scissors"));