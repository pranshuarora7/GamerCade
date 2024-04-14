// Selecting elements from the HTML
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const winnerDisplay = document.getElementById('winner');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const restartButton = document.getElementById('restart');

// Define choices and initial scores
const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

// Function to determine the result of the game
function determineResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win';
    } else {
        return 'You Lose';
    }
}

// Function to update the scores and display the winner
function updateScoresAndWinner(userChoice, computerChoice) {
    const result = determineResult(userChoice, computerChoice);
    if (result === 'You Win') {
        userScore++;
    } else if (result === 'You Lose') {
        computerScore++;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = result;

    if (userScore === 5 || computerScore === 5) {
        // Display final scores
        winnerDisplay.textContent = `Final Scores - User: ${userScore}, Computer: ${computerScore}`;
        // Disable button clicks
        document.querySelectorAll('.choice').forEach(button => {
            button.disabled = true;
        });
    }

    if (userScore === 5) {
        winnerDisplay.textContent += ' - Congratulations! You Won';
    } else if (computerScore === 5) {
        winnerDisplay.textContent += ' - The Computer has caught up to you! Try again.';
    }
}

// Add click event listeners to all buttons
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        // Get user choice and generate computer choice
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Display choices
        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent = computerChoice;

        // Update scores and display winner
        updateScoresAndWinner(userChoice, computerChoice);
    });
});

// Add click event listener to restart button
restartButton.addEventListener('click', () => {
    // Reset scores and messages
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    winnerDisplay.textContent = '';
    // Enable button clicks
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = false;
    });
});
