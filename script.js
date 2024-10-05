// Declare function getComputerChoice
function getComputerChoice() {
    // Randomly return "rock", "paper", or "scissors"
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

// Declare a function called getHumanChoice
function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Invalid choice. Please refresh the page and try again.");
        return null; 
    }
}


let humanScore = 0;
let computerScore = 0;

// Create a new function named playRound
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        console.log("Computer Wins this round!");
        computerScore += 1;
    } else {
        console.log("Player Wins this round!");
        humanScore += 1;
    }

    console.log(`Scores -> Player: ${humanScore}, Computer: ${computerScore}`);
}

// Function to play a game (best of 5 rounds, for example)
function playGame() {
    let rounds = 5; // Set number of rounds
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        if (humanChoice === null) break; // End the game if invalid input

        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
    }
    if (humanScore > computerScore) {
        console.log("Player Wins the Game!");
    } else if (humanScore < computerScore) {
        console.log("Computer Wins the Game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
