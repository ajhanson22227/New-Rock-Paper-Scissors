function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection)
        return "It's a tie";

    if (playerSelection == "rock"){
        if (computerSelection == "paper")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        else
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection == "paper"){
        if (computerSelection == "scissors")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        else
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        else
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

}

let computerChoices = ['rock', 'paper', 'scissors'];

let playerChoice = "";
while (!computerChoices.includes(playerChoice)){
    playerChoice = prompt("What is your choice? Rock Paper or Scissors");
    playerChoice = playerChoice.toLocaleLowerCase();
}


var compSelector = Math.floor(Math.random() * 3);
let computerChoice = computerChoices[compSelector];

console.log(playRound(playerChoice, computerChoice));