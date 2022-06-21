window.onload=function(){
    
    // const rockBtn = document.querySelector('#rock');
    // const paperBtn = document.querySelector('#paper');
    // const scissorsBtn = document.querySelector('#scissors');

    // rockBtn.addEventListener('click', () => { playRound("rock", computerPlay());})
    // paperBtn.addEventListener('click', () => {playRound("paper", computerPlay());})
    // scissorsBtn.addEventListener('click', () => {playRound("scissors", computerPlay())})

    const rockBtn1 = document.createElement('button');
    rockBtn1.classList.add('rock');
    rockBtn1.textContent = "Rock"
    const paperBtn1 = document.createElement('button');
    paperBtn1.classList.add('paper');
    paperBtn1.textContent = "Paper"
    const scissorsBtn1 = document.createElement('button');
    scissorsBtn1.classList.add('scissors');
    scissorsBtn1.textContent = "Scissors"

    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Play again?"

    const startBtn = document.querySelector('#start');
    
    resetBtn.addEventListener('click', () => {clearResult()})
    startBtn.addEventListener('click', () => {startGame()})


function startGame(){
    //find the results box and creare the text div
    const resultBox = document.querySelector('#resultBox');
    const resultTextDiv = document.createElement('div');
    resultBox.appendChild(resultTextDiv);
    const btns = document.querySelector('#btns');

    btns.appendChild(rockBtn1);
    btns.appendChild(paperBtn1);
    btns.appendChild(scissorsBtn1);
    btns.appendChild(resetBtn);
}

function computerPlay(){
    let computerOptions = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * (computerOptions.length))
    let computerOutput = computerOptions[index]
    return computerOutput
}

function playRound(playerSelection, computerSelection) {


    //create the text paragraph that will get put inside the text div
    const resultText = document.createElement('p');

    playerSelection = playerSelection.toLowerCase()
    console.log("Player Selection: " + playerSelection)
    console.log("Computer Selection: " + computerSelection)

    //RPS logic
    let result
    if (playerSelection == computerSelection){ //if player ties
        resultText.textContent = "You tied! :|"; //set result text
        resultTextDiv.appendChild(resultText) //add result text to result div
        console.log(result = "tie")
    }
    else if ( //if player wins
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"){
        resultText.textContent = "You won! :)"; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "win")
    }
    else{ //if player loses
        resultText.textContent = "You lost! :("; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "lost")
    }
}

function clearResult(){
    console.log("REMOOOOOOOOOVE")
    resultTextDiv.removeChild(resultText);
}

}

// function game(playerSelection){
//     let wins = 0
//     let losses = 0
//     let ties = 0
//     // for (let i = 0; i < 5; i++) {
//         // let playerSelection=(prompt("Please enter Rock, Paper, or Scissors: "));
//         let computerSelection = computerPlay();
//         result = playRound(playerSelection, computerSelection)
//         if (result == "win"){
//             wins ++
//             console.log("You won! :) The computer said " + computerSelection + " and you said " + playerSelection)
//         }
//         else if (result == "lost"){
//             losses ++
//             console.log("You lost! :(  The computer said " + computerSelection + " and you said " + playerSelection)
//         }
//         else if (result == "tie"){
//             ties ++
//             console.log("Tied! :| Both you and the Computer said " + computerSelection)
//         }
//     // }
//     return ("Wins: "+wins+"\nLosses: "+losses+"\nTies: "+ties)
// }
 
let result = 0
// console.log(game());