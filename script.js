let playerScore = 0;
let botScore = 0;
let drawsScore = 0;

// Events
const btn_rock = document.querySelector("#btn-rock");
const btn_paper = document.querySelector("#btn-paper");
const btn_scissors = document.querySelector("#btn-scissors");
const p_display = document.querySelector('#p-display');
const buttonsNodeList = document.querySelectorAll('button');
const buttons = [...buttonsNodeList];

// btn_rock.addEventListener("click", () => {
//     playRound('rock', getComputerChoice());
// })

// btn_paper.addEventListener("click", () => {
//     playRound('paper', getComputerChoice());
// })

// btn_scissors.addEventListener("click", () => {
//     playRound('scissors', getComputerChoice());
// })



//console.log(getComputerChoice());
//console.log(getHumanChoice());


//playRound(humanSelection, computerSelection);
playGame();

function displayChange(textValue) {
    p_display.textContent = textValue;
}
function updateScore(whoWon){
    const youScoreText = document.querySelector('#you-score');
    const botScoreText = document.querySelector('#bot-score');
    const drawsScoreText = document.querySelector('#draws-score');

    whoWon == 'player' ? youScoreText.textContent = `You: ${playerScore + 1}`:
    whoWon == 'bot' ? botScoreText.textContent = `Bot: ${botScore + 1}` :
    whoWon == 'draw' ? drawsScoreText.textContent = `Draws: ${drawsScore + 1}` : ''


}

function playGame() {
    let round = 1
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(round < 5) {
                playRound(button.textContent.toLowerCase(), getComputerChoice())
                round += 1;
            }
            console.log(round)
        })
    })
    // for( let i = 0; i < 5; i++) {
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();

    //     playRound(humanSelection, computerSelection);

    //     console.log(`You Score: ${humanScore}`);
    //     console.log(`Computer Score: ${computerScore}`);

    // }

    // humanScore > computerScore ? console.log("You Win the Game") : 
    // humanScore == computerScore ? console.log("You Draw the Game") : 
    //                                 console.log("You Lost the Game")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" || 
        humanChoice == "paper" || 
        humanChoice == "scissors") {

            if (humanChoice == computerChoice) {
                displayChange("Draw");
                updateScore('draw');
                return
            }
        
            if (humanChoice == "rock" && computerChoice == "scissors" || 
                humanChoice == "scissors" && computerChoice == "paper" || 
                humanChoice == "paper" && computerChoice == "rock") {
        
                displayChange("You Won the Round");
                updateScore('player');
            } else {
                displayChange("You Lose");
                updateScore('bot');
            }
            
    } else {
        displayChange("You Lost the Round");
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