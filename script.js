window.onload=function(){
    
    // const rockBtn = document.querySelector('#rock');
    // const paperBtn = document.querySelector('#paper');
    // const scissorsBtn = document.querySelector('#scissors');

    const rockBtn = document.createElement('button'); //rock button is created
    rockBtn.classList.add('rock');
    rockBtn.textContent = "Rock"
    rockBtn.addEventListener('click', () => { playRound("rock", computerPlay());})

    const paperBtn = document.createElement('button'); //paper button is created
    paperBtn.classList.add('paper');
    paperBtn.textContent = "Paper"
    paperBtn.addEventListener('click', () => {playRound("paper", computerPlay());})

    const scissorsBtn = document.createElement('button'); //scissors button is created
    scissorsBtn.classList.add('scissors');
    scissorsBtn.textContent = "Scissors"
    scissorsBtn.addEventListener('click', () => {playRound("scissors", computerPlay())})

    const resetBtn = document.createElement('button'); //reset button is created
    resetBtn.textContent = "Play again?"

    const startBtn = document.querySelector('#start');

    const resultTextDiv = document.createElement('div');
    resultTextDiv.classList.add('resultTextDiv')

    const resultText = document.createElement('p');
    
    resetBtn.addEventListener('click', () => {clearResult()})
    startBtn.addEventListener('click', () => {startGame()})

function playRound(playerSelection, computerSelection) {

    //create the text paragraph that will get put inside the text div

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

function startGame(){
    //find the results box and creare the text div
    const resultBox = document.querySelector('#resultBox');
    
    resultBox.appendChild(resultTextDiv);
    const btns = document.querySelector('#btns');

    //make the rock, paper, scissors, and reset button appear
    btns.appendChild(rockBtn);
    btns.appendChild(paperBtn);
    btns.appendChild(scissorsBtn);
    btns.appendChild(resetBtn);

    //removes the start button
    btns.removeChild(startBtn);
}

function clearResult(){
    console.log("REMOOOOOOOOOVE")
    // startGame();
    // btns.appendChild(startBtn);
    resultTextDiv.removeChild(resultText);
}
function computerPlay(){
    let computerOptions = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * (computerOptions.length))
    let computerOutput = computerOptions[index]
    return computerOutput
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
 