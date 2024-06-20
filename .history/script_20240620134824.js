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
    let computer = 0, human = 0;
    if (computerSelection > humanSelection) {
        alert("Computer wins!");
        return computer++;
    } else if (computerSelection < humanSelection) {
        alert("Human wins!");
        return human++;
    } else {
        alert("Tie!");
        return;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);