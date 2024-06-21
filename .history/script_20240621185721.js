// PROMPT user to choose between rock, paper, and scissor
// IF user is done choosing, THEN
// GENERATE random element between rock, paper, and scissor
// IF user element beats computer element, THEN
// add point to user, ELSE
// add point to computer


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

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?");
    humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(computerSelection, humanSelection) {
    if (computerSelection > humanSelection) {
        alert("Computer wins the round!");
        return "computer";
    } else if (computerSelection < humanSelection) {
        alert("Human wins the round!");
        return "human";
    } else {
        alert("Tie!");
        return "tie";
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
