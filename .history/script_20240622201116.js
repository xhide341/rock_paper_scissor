// PROMPT user to choose between rock, paper, and scissor
// IF user is done choosing, THEN
// GENERATE random element between rock, paper, and scissor
// IF user element beats computer element, THEN
// add point to user, ELSE
// add point to computer

const humanHealth = document.querySelector(".hearts-human")
const computerHealth = document.querySelector(".hearts-computer")
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorButton = document.querySelector(".scissor")



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

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorButton.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
});

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            return 0;
        } else if (computerSelection === "scissor") {
            return 1;
        } else {
            return 2;
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "scissor") {
            return 0;
        } else if (computerSelection === "rock") {
            return 1;
        } else {
            return 2;
        }
    } else {
        if (computerSelection === "rock") {
            return 0;
        } else if (computerSelection === "paper") {
            return 1;
        } else {
            return 2;
        }
    }
}

function playGame() {
    let computer = 0; human = 0, tie = 0;
    for (let i = 1; i <= 5; i++) {
        alert("Round " + i);
        let roundWinner = playRound(getComputerChoice(), getHumanChoice());
        if (roundWinner === "computer") {
            computer++;
        } else if (roundWinner === "human") {
            human++;
        } else {
            tie++;
        }
    }

    if (computer > human) {
        alert("Computer wins the game!");
    } else if (computer < human) {
        alert("Human wins the game!");
    } else {
        alert("It's a tie!");
    }
}
