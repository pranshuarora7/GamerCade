const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const winnerdisplay = document.getElementById('winner')
const possibleChoices = document.querySelectorAll('button')
const userscoreDisplay = document.getElementById('user-score')
const compscoreDisplay = document.getElementById('computer-score')


let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', makeChoice))

function makeChoice(e) {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    scoreboard()
    restart()
}

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }

    if (computerChoice === userChoice) {
        results = 0
    } else if (winConditions[userChoice] === computerChoice) {
        results = 1
    } else {
        results = -1
    }
    displayResult()
    resultDisplay.innerHTML = result
}
function displayResult() {
    if (results == 0) {
        result = "Tie"
    }
    else if (results == 1) {
        result = "You Win"
    }
    else {
        result = "You Lose"
    }
}
let userScore = 0
let compScore = 0
let target = 5
function scoreboard() {
    if (results == 1) {
        userScore += 1;
    }
    else {
        compScore += 1;
    }
    userscoreDisplay.innerHTML = userScore
    compscoreDisplay.innerHTML = compScore
    if (userScore == target) {
        winner = "Congratulations! You Won"
    }
    else if (compScore == target) {
        winner = "The Computer has caught up to you! Try again."
    }
    else {
        winner = ""
    }
    winnerdisplay.innerHTML = winner
}
function restart() {
    if (userScore == target) {
        alert("GAME RESTARTED, You Won!!")
        window.location.reload();
    }
    else if (compScore == target) {
        alert("GAME RESTARTED, Computer Won!!")
        window.location.reload();
    }
}