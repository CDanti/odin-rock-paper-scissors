window.onload=function(){
    
    // const rockBtn = document.querySelector('#rock');
    // const paperBtn = document.querySelector('#paper');
    // const scissorsBtn = document.querySelector('#scissors');

    const rockBtn = document.createElement('button'); //rock button is created
    rockBtn.classList.add('rock');
    rockBtn.textContent = "Rock"
    rockBtn.addEventListener('click', () => {
        playRound("rock", computerPlay());
        // playerSelection = "rock";
    })

    const paperBtn = document.createElement('button'); //paper button is created
    paperBtn.classList.add('paper');
    paperBtn.textContent = "Paper"
    paperBtn.addEventListener('click', () => {
        playRound("paper", computerPlay());
        // playerSelection = "paper";
    })

    const scissorsBtn = document.createElement('button'); //scissors button is created
    scissorsBtn.classList.add('scissors');
    scissorsBtn.textContent = "Scissors"
    scissorsBtn.addEventListener('click', () => {
        playRound("scissors", computerPlay());
        // playerSelection = "scissors";
    })

    const resetBtn = document.createElement('button'); //reset button is created
    resetBtn.textContent = "Play again?"

    const startBtn = document.querySelector('#start');

    const resultTextDiv = document.createElement('div');
    resultTextDiv.classList.add('resultTextDiv')

    const scoreTracker = document.createElement('div');
    scoreTracker.classList.add('scoreTracker');
    scoreTracker.textContent = "hi";

    const resultText = document.createElement('p');
    
    resetBtn.addEventListener('click', () => {clearResult()})
    startBtn.addEventListener('click', () => {startGame()})

function playRound(playerSelection, computerSelection) {

    //create the text paragraph that will get put inside the text div
    console.log("Player Selection: " + playerSelection)
    console.log("Computer Selection: " + computerSelection)

    //RPS logic
    let result
    if (playerSelection == computerSelection){ //if player ties
        resultText.textContent = "You tied! :|"; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "tie");
        return result;
    }
    else if ( //if player wins
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"){
        resultText.textContent = "You won! :)"; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "win");
        return result;
    }
    else{ //if player loses
        resultText.textContent = "You lost! :("; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "lost");
        return result;
    }
}

function startGame(){
    //find the results box and creare the text div
    const resultBox = document.querySelector('#resultBox');
    
    resultBox.appendChild(resultTextDiv);
    resultBox.appendChild(scoreTracker)
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
    // refreshes the page, therefore restarting the game
    window.location.reload(true)
    console.log("REMOOOOOOOOOVE")
    // resultTextDiv.removeChild(resultText);
}
function computerPlay(){
    let computerOptions = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * (computerOptions.length))
    let computerOutput = computerOptions[index]
    return computerOutput
}

// function scoreTracker(){
//     let wins = 0
//     let losses = 0
//     let ties = 0
//     for (let i = 0; i < 5; i++) {
//         result = playRound(playerSelection, computerSelection)
//         if (result == "win"){
//             wins ++
//             const scoreTrackerWin = document.createElement('p');
//             scoreTrackerWin.textContent = "Wins: "+wins;
//             console.log("You won! :) The computer said " + computerSelection + " and you said " + playerSelection)
//         }
//         else if (result == "lost"){
//             losses ++
//             const scoreTrackerLost = document.createElement('p');
//             scoreTrackerLost.textContent = "Losses: "+ losses;
//             console.log("You lost! :(  The computer said " + computerSelection + " and you said " + playerSelection)
//         }
//         else if (result == "tie"){
//             ties ++
//             const scoreTrackerTie = document.createElement('p');
//             scoreTrackerTie.textContent = "Ties: "+ties;
//             console.log("Tied! :| Both you and the Computer said " + computerSelection)
//         }
//     }
//     scoreTracker.appendChild(scoreTrackerWin);
//     scoreTracker.appendChild(scoreTrackerLost);
//     scoreTracker.appendChild(scoreTrackerTie);
//     return ("Wins: "+wins+"\nLosses: "+losses+"\nTies: "+ties)
// }
}
