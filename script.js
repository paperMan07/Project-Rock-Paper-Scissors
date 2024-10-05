//Declare function getComputerChoice
function getComputerChoice() {
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
let computerChoice = Math.floor(Math.random()*3)
if (computerChoice == 1){
    return 'rock'
} else if (computerChoice == 2){
return 'paper'
}
else
{return "scissors"}
}

//Declare a function called getHumanChoice
function getHumanChoice(){
//Write code so that getHumanChoice will return one of the valid choices  
let humanChoice = prompt("rock, paper,or scissors?")
if (humanChoice.toLowerCase() === "rock"||"cock"){
    return "rock"
} else if (humanChoice.toLowerCase() === "paper"){
    return "paper"
} else if (humanChoice.toLowerCase() === "scissors"){
    return "scissors"  
} else if (humanChoice.toLowerCase() === "gun"){
    return "gun"}
 else {alert("Invalid choice. Please refresh the page to try again (I'm too lazy to change this into a while loop)");}
}
//Create two new variables named humanScore and computerScore in the global scope.
let humanScore = 0
let computerScore = 0
//Initialize those variables with the value of 0.
