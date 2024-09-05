const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const posssibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
posssibleChoices.forEach(posssibleChoice => posssibleChoice.addEventListener('click',(e) => {
    playerChoice =e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}) )

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1){
    computerChoice = 'rock'
  }
  if (randomNumber === 2){
    computerChoice = 'scissors'
  }
  if (randomNumber === 3){
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if(computerChoice== playerChoice){
        result = 'its a draw!'
    }
    if(computerChoice==='rock' && playerChoice==="scissors"){
        result= 'you lost!'
    }
    if(computerChoice==='rock' && playerChoice==="paper"){
        result= 'you win!'
    }
    if(computerChoice==='scissors' && playerChoice==="rock"){
        result= 'you win!'
    }
    if(computerChoice==='paper' && playerChoice==="scissors"){
        result= 'you win!'
    }
    if(computerChoice==='scissors' && playerChoice==="paper"){
        result= 'you lost!'
    }
    if(computerChoice==='paper' && playerChoice==="rock"){
        result= 'you lost!'
    }
    resultDisplay.innerHTML = result
}