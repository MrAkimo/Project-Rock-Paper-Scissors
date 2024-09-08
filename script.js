console.log(getComputerChoice());
console.log(getHumanChoice());

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock, Paper, Scissors")
    return humanChoice.toLowerCase();
}

function getComputerChoice() {

    let randomValue = (Math.random() * 10);

    return computerChoice = (randomValue >= 6.66 ? "Scissors" : 
                             randomValue >= 3.33 ? "Paper"    :
                             randomValue >  0    ? "Rock"     : "e");
}