const winnerText = document.querySelector(".display-winner");
const humanHealth = document.querySelector(".hearts-human");
const computerHealth = document.querySelector(".hearts-computer");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            computer++;
        } else if (computerSelection === "scissor") {
            human++;
        } else {
            tie++;
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "scissor") {
            computer++;
        } else if (computerSelection === "rock") {
            human++;
        } else {
            tie++;
        }
    } else {
        if (computerSelection === "rock") {
            computer++;
        } else if (computerSelection === "paper") {
            human++;
        } else {
            tie++;
        }
    }
    return;
}

function checkRound(i) {
    if (i === 5) {
        displayGameWinner();
        i = 0;

    }
}

function displayRoundWinner() {
    if (computer > human) {
        winnerText.textContent = "Computer wins the round!";
    } else if (computer < human) {
        winnerText.textContent = "Human wins the round!";
    } else {
        winnerText.textContent = "It's a tie!";
    }
}

let computer = 0;
let human = 0;
let tie = 0;
let i = 0;

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    i++;
    checkRound(i);
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    i++;
    checkRound(i);
});

scissorButton.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
    i++;
    checkRound(i);
});