let humanScore = 0
let computerScore = 0

//console.log(getComputerChoice());
//console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`You Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" || 
        humanChoice == "paper" || 
        humanChoice == "scissors") {

            if (humanChoice == computerChoice) {
                console.log("Draw")
                return
            }
        
            if (humanChoice == "rock" && computerChoice == "scissors" || 
                humanChoice == "scissors" && computerChoice == "paper" || 
                humanChoice == "paper" && computerChoice == "rock") {
        
                console.log("You Win");
                humanScore += 1;
            } else {
                console.log("You Lose");
                computerScore += 1;
            }
    } else {
        console.log("Invalid Choice");
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock, Paper, Scissors")
    return humanChoice.toLowerCase();
}

function getComputerChoice() {

    let randomValue = (Math.random() * 10);

    return computerChoice = (randomValue >= 6.66 ? "scissors" : 
                             randomValue >= 3.33 ? "paper"    :
                             randomValue >  0    ? "rock"     : "e");
}