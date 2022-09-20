function getComputerChoice() {
    let compChoice = ['Rock', 'Paper', 'Scissors']
    return compChoice[Math.floor(Math.random()*compChoice.length)]
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beat Paper!'
    } else { 
        return`Sorry, you lose. ${computerSelection} beats ${playerSelection}!`
    }
}

 function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase()
        let computerSelection = getComputerChoice()
        let result = playGame(playerSelection, computerSelection.toLowerCase());
        alert(result)
    }
 }

 game();