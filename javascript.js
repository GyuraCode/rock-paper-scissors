//rolls random outcome for computer
function getComputerChoice() {       
    let compAnswer = Math.floor(Math.random() * 100 + 1);
    if (compAnswer < 34) {
        return "Scissors";
    } else if (compAnswer < 67) {
        return "Paper";
    } else {return "Rock" }
}

let computerSelection;
let playerSelection;

let playerScore = 0;
let compScore = 0;
let winner = ""

const rock = document.querySelector(`#rockBtn`);

const paper = document.querySelector("#paper");

const scissors = document.querySelector("#scissors"); 

const reset = document.querySelector("#reset");

const results = document.querySelector("#results");

const playerPoints = document.querySelector("#trackPlayerPoints")

const compPoints = document.querySelector("#trackCompPoints")

const whoWon = document.querySelector("#winner");

//determines outcome of the game
rpsGame = (computerSelection, playerSelection) => {
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "Paper") {
        results.textContent = "Try harder! My Paper beats your Rock!";
        compScore++
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        results.textContent = "Pfft, no! My Scissors beats your Paper!";
        compScore++
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        results.textContent = "Not worth my time! My Rock beats your Scissors!";
        compScore++
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        results.textContent ="You got lucky! Your Rock beats my Scissors!";
        playerScore++
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        results.textContent ="I wasn't ready yet! Your Scissors beats my Paper!";
        playerScore++
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        results.textContent = "... One more! Your Paper beats my Rock!";
        playerScore++
    } else {
        results.textContent = "Draw! Play again!"
    };
    updateScore()
    declareWinner()
}   

// operate when rock, paper and scissors buttons are pressed, respectively
function playerRock() {
    rpsGame(computerSelection, "rock")
};

function playerPaper() {
    rpsGame(computerSelection, "paper")
}

function playerScissors() {
    rpsGame(computerSelection, "scissors")
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    rock.addEventListener('click', playerRock);
    paper.addEventListener('click', playerPaper);
    scissors.addEventListener('click', playerScissors);
    results.textContent = "";
    whoWon.textContent = "";
    playerPoints.textContent = 0;
    compPoints.textContent = 0;
}

// link buttons to click event, to process through to functions deciding playerSelection
rock.addEventListener('click', playerRock);

paper.addEventListener('click', playerPaper);

scissors.addEventListener('click', playerScissors);

reset.addEventListener('click', resetGame);

// monitors when either player reaches 5 points
function declareWinner() {
    if (playerScore === 5 || compScore === 5) {
        scissors.removeEventListener('click', playerScissors);
        paper.removeEventListener('click', playerPaper);
        rock.removeEventListener('click', playerRock);

        if (playerScore === 5) {
            winner = "Player"
        } else if (compScore === 5) {
            winner = "Computer"
        }
        whoWon.textContent = `${winner} got to 5 points and wins!`
    }
}

function updateScore() {
playerPoints.textContent = playerScore;
compPoints.textContent = compScore;
}
