
let computerChoices = ['rock', 'paper', 'scissors'];
let computerSelection = "";

let playerScoreText = document.getElementById('player-scoreID');
let playerScore = 0;
playerScoreText.innerHTML = playerScore;

let computerScoreText = document.getElementById('computer-scoreID');
let computerScore = 0;
computerScoreText.innerHTML = computerScore;

//main gameplay function
function startRound(playerSelection){


    computerSelection = getComputerChoice();
    let roundStatus = getRoundWinner(playerSelection, computerSelection);
    roundMessageScores(roundStatus, playerSelection, computerSelection);

    checkForGameWinner();

    console.log(`Player: ${playerSelection}\tComputer: ${computerSelection}`);
}

function getComputerChoice(){
    var compSelector = Math.floor(Math.random() * 3);
    return computerChoices[compSelector];
}


//returns an int, 0 = tie, 1 = Player Won, 2 = Computer Won
function getRoundWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection)
        return 0;

    if (playerSelection == "rock"){
        if (computerSelection == "paper")
            return 2;
        else
            return 1;
    }
    if (playerSelection == "paper"){
        if (computerSelection == "scissors")
            return 2;
        else
            return 1;
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock")
            return 2;
        else
            return 1;
    }
}

//Displays Text and increments scores
function roundMessageScores(roundStatus, playerSelection, computerSelection){
    //tie
    if(roundStatus == 0)
        document.getElementById('announcements').innerHTML = `It's a tie`;
    //player wins
    else if (roundStatus == 1){
        document.getElementById('announcements').innerHTML = `Your ${playerSelection} beats ${computerSelection}`;
        console.log("Player Won");
        playerScore++;
        playerScoreText.innerHTML = playerScore;
    }
    //computer wins
    else{
        document.getElementById('announcements').innerHTML = `Computer's ${computerSelection} beats your ${playerSelection}`;
        console.log("Computer Won");
        computerScore++;
        computerScoreText.innerHTML = computerScore;
    }
}

function checkForGameWinner(){
    if (playerScore == 5){
        console.log('player wins the game');
        document.getElementById('choices-container').innerHTML = "You Win";
        document.getElementById('choices-container').style.display = "block";
        document.getElementById('reset-button').style.display = "block";
    }
    if (computerScore == 5){
        console.log('computer wins the game');
        document.getElementById('choices-container').innerHTML = "Computer Wins";
        document.getElementById('choices-container').style.display = "block";
        document.getElementById('reset-button').style.display = "block";
    }
}

function reloadPage(){
    window.location.reload();
}