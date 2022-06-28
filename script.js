window.onload=function(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let rounds = 0;
    
    // const rockBtn = document.querySelector('#rock');
    // const paperBtn = document.querySelector('#paper');
    // const scissorsBtn = document.querySelector('#scissors');

    const rockBtn = document.createElement('button'); //rock button is created
    rockBtn.classList.add('rock');
    rockBtn.textContent = "Rock"
    rockBtn.addEventListener('click', () => {playRound("rock", computerPlay());})

    const paperBtn = document.createElement('button'); //paper button is created
    paperBtn.classList.add('paper');
    paperBtn.textContent = "Paper"
    paperBtn.addEventListener('click', () => {playRound("paper", computerPlay());})

    const scissorsBtn = document.createElement('button'); //scissors button is created
    scissorsBtn.classList.add('scissors');
    scissorsBtn.textContent = "Scissors"
    scissorsBtn.addEventListener('click', () => {playRound("scissors", computerPlay());})

    const resetBtn = document.createElement('button'); //reset button is created
    resetBtn.textContent = "Play again?"
    resetBtn.addEventListener('click', () => {clearResult()})

    const startBtn = document.querySelector('#start'); //start button is created
    startBtn.addEventListener('click', () => {startGame()})

    const resultTextDiv = document.createElement('div'); //result text div is created
    resultTextDiv.classList.add('resultTextDiv')
    const resultText = document.createElement('p'); // result text p is created
    resultText.classList.add('resultBoxText');
    resultText.textContent = "Who will win?? Play to find out!"; //text in result text spot before round is played
    resultTextDiv.appendChild(resultText);

    const scoreTracker = document.createElement('div'); //score tracker div is created
    scoreTracker.classList.add('scoreTracker');

    const scoreTrackerTextWin = document.createElement('p'); //win tracker
    scoreTrackerTextWin.textContent = "Wins: "+wins;
    scoreTracker.appendChild(scoreTrackerTextWin);
    const scoreTrackerTextLose = document.createElement('p'); //lose tracker
    scoreTrackerTextLose.textContent = "Losses: "+losses;
    scoreTracker.appendChild(scoreTrackerTextLose);
    const scoreTrackerTextTie = document.createElement('p'); //tie tracker
    scoreTrackerTextTie.textContent = "Ties: "+ties;
    scoreTracker.appendChild(scoreTrackerTextTie);
    const scoreTrackerTextRounds = document.createElement('p') //rounds tracker
    scoreTrackerTextRounds.textContent = "Rounds: " + rounds;
    scoreTracker.appendChild(scoreTrackerTextRounds)


    const choicesBox = document.createElement('div'); //choices box created
    choicesBox.classList.add('choicesBox');
    choicesBox.style.order = -1; //moves the choicex box to the leftmost place

    //these are pretty self explanatory
    const computerChoice = document.createElement('p'); 
    computerChoice.classList.add('choicesText');
    const playerChoice = document.createElement('p');
    playerChoice.classList.add('choicesText');



function playRound(playerSelection, computerSelection) {

    //create the text paragraph that will get put inside the text div
    console.log("Player Selection: " + playerSelection)
    console.log("Computer Selection: " + computerSelection)
    playerChoice.textContent = "Player Selection: " + playerSelection;
    computerChoice.textContent = "Computer Selection: " + computerSelection;
    choicesBox.appendChild(playerChoice);
    choicesBox.appendChild(computerChoice);


    //RPS logic
    if (playerSelection == computerSelection){ //if player ties
        resultText.textContent = "You tied! :|"; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "tie");
        ties ++;
        rounds ++;
        scoreTrackerTextTie.textContent = "Ties: "+ties;
        scoreTrackerTextRounds.textContent = "Rounds: " + rounds;
        // return result;
    }
    else if ( //if player wins
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"){
        resultText.textContent = "You won! :)"; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "win");
        wins ++;
        rounds ++;
        scoreTrackerTextWin.textContent = "Wins: "+wins;
        scoreTrackerTextRounds.textContent = "Rounds: " + rounds;
        // return result;
    }
    else{ //if player loses
        resultText.textContent = "You lost! :("; //set result text
        resultTextDiv.appendChild(resultText); //add result text to result div
        console.log(result = "lost");
        losses ++;
        rounds ++;
        scoreTrackerTextLose.textContent = "Losses: "+losses;
        scoreTrackerTextRounds.textContent = "Rounds: " + rounds;
        // return result;
    }
    console.log("rounds: " + rounds);
    if (rounds >= 5){
        endGame();
    }
}

function startGame(){
    //find the results box and creare the text div
    const resultBox = document.querySelector('#resultBox');
    
    resultBox.appendChild(resultTextDiv);
    resultBox.appendChild(scoreTracker);
    resultBox.appendChild(choicesBox);
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

function endGame(){
    console.log("hiya, the game is over go away");
    if ( wins>losses ){
        resultText.textContent = "Game over! You Won!"
    }
    else if (wins < losses){
        resultText.textContent = "Game over! You Lost :("
    }
    else{
        resultText.textContent = "Game over! You Tied :|"
    }
    btns.removeChild(rockBtn);
    btns.removeChild(paperBtn);
    btns.removeChild(scissorsBtn);
}
}
