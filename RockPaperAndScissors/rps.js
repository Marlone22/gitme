document.getElementById('start').addEventListener('click', startGame);

//  scores and the limit
let userScore = 0;
let computerScore = 0;
const gameLimit = 5;

//  start the game
function startGame() {
    // Reset scores when starting a new game
    userScore = 0;
    computerScore = 0;
    updateScoreboard();

    // Hide the result message
    document.querySelector('.result').style.display = 'none';

    //  event listeners to choices
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.addEventListener('click', () => play(choice.id));
    });
}

// play a round of the game
function play(playerChoice) {
    if (userScore < gameLimit && computerScore < gameLimit) {
        const choices = ["Rock", "Paper", "Scissor"];
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomIndex];

        const result = getResult(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, result);
        updateScoreboard();
    }

    if (userScore === gameLimit || computerScore === gameLimit) {
        endGame();
    }
}

//  result of a round
function getResult(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === "Rock" && computer === "Scissor") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissor" && computer === "Paper")
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

//  display  message
function displayResult(player, computer, result) {
    const resultElement = document.querySelector('.result p');
    resultElement.textContent = `${player} beats ${computer}. ${result}`;
    document.querySelector('.result').style.display = 'block';
}

//  update score
function updateScoreboard() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// end game
function endGame() {
    if (userScore > computerScore) {
        alert('You won the game!');
    } else {
        alert('You lost the game.');
    }

    // Restart
    startGame();
}
