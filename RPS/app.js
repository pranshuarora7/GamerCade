const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', makeChoice))

function makeChoice(e) {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
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
        result = 'It\'s a draw!'
    } else if (winConditions[userChoice] === computerChoice) {
        result = 'You win!'
    } else {
        result = 'You lose!'
    }

    resultDisplay.innerHTML = result
}
