const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoises = document.querySelectorAll('button');
let userChoice
let computerChoice

    possibleChoises.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
    }));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // 3 or possibleChoises.length
    // console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}