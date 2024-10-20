let playerScore = 0;
let botScore = 0;
let drawsScore = 0;

playGame();

function displayChange(textValue) {

    let p_display = document.querySelector('#p-display');
    p_display.textContent = textValue;
}
function updateScore(whoWon){

    let youScoreText = document.querySelector('#you-score');
    let botScoreText = document.querySelector('#bot-score');
    let drawsScoreText = document.querySelector('#draws-score');

    whoWon == 'player' ? youScoreText.textContent = `You: ${playerScore += 1}`:
    whoWon == 'bot' ? botScoreText.textContent = `Bot: ${botScore += 1}` :
    whoWon == 'draw' ? drawsScoreText.textContent = `Draws: ${drawsScore += 1}` : ''


}

function playGame() {
    
    const buttonsNodeList = document.querySelectorAll('button');
    const buttons = [...buttonsNodeList];
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(playerScore < 5  && botScore < 5) {
                playRound(button.textContent.toLowerCase(), getComputerChoice())
            }
            if(playerScore == 5  || botScore == 5){
                playerScore > botScore ? displayChange('You Win the Game') : 
                playerScore == botScore ? displayChange('You Draw the Game') : 
                                               displayChange('You Lost the Game')
            }
        })
    })
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
                displayChange("You Lose the Round");
                updateScore('bot');
            }
            
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