
function computerPlay(){
    let computerOptions = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * (computerOptions.length))
    let computerOutput = computerOptions[index]
    return computerOutput
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    // console.log("Player Selection: " + playerSelection)
    // console.log("Computer Selection: " + computerSelection)
    let result
    if (playerSelection == computerSelection){
        return result = "tie"
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ){
        return result = "win"
    }
    else{
        return result = "lost"
    }
}

function game(playerSelection){
    let wins = 0
    let losses = 0
    let ties = 0
    // for (let i = 0; i < 5; i++) {
        // let playerSelection=(prompt("Please enter Rock, Paper, or Scissors: "));
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection)
        if (result == "win"){
            wins ++
            console.log("You won! :) The computer said " + computerSelection + " and you said " + playerSelection)
        }
        else if (result == "lost"){
            losses ++
            console.log("You lost! :(  The computer said " + computerSelection + " and you said " + playerSelection)
        }
        else if (result == "tie"){
            ties ++
            console.log("Tied! :| Both you and the Computer said " + computerSelection)
        }
    // }
    return ("Wins: "+wins+"\nLosses: "+losses+"\nTies: "+ties)
}
 
let result = 0
console.log(game());

// const rockBtn = document.querySelector('rock');
// const paperBtn = document.querySelector('paper');
// const scissorsBtn = document.querySelector('scissors');

// rockBtn.addEventListener('click', game(playerSelection = "rock"))
// paperBtn.addEventListener('click', game(playerSelection="rock"))
// scissorsBtn.addEventListener('click', game(playerSelection="rock"))



