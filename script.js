let humanScore = 0
let computerScore = 0

// Events
const btn_rock = document.querySelector("#btn-rock");
btn_rock.addEventListener("click", () => {
    alert('Rock choice');
})

const btn_paper = document.querySelector("#btn-paper");
btn_paper.addEventListener("click", () => {
    alert('Paper choice');
})

const btn_scissors = document.querySelector("#btn-scissors");
btn_scissors.addEventListener("click", () => {
    alert('Scissors choice');
})

//console.log(getComputerChoice());
//console.log(getHumanChoice());


//playRound(humanSelection, computerSelection);
//playGame();

function playGame() {
    for( let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`You Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);

    }

    humanScore > computerScore ? console.log("You Win the Game") : 
    humanScore == computerScore ? console.log("You Draw the Game") : 
                                    console.log("You Lost the Game")
}

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
        
                console.log("You Won the Round");
                humanScore += 1;
            } else {
                console.log("You Lose");
                computerScore += 1;
            }
            
    } else {
        console.log("You Lost the Round");
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