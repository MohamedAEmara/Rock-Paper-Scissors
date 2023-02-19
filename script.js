function getComputerChoice()
{
    let randomChoice = Math.floor((Math.random()*3)%3) + 1;
    alert(randomChoice);
    if(randomChoice === 1)
        return 'Rock';
    else if(randomChoice === 2)
        return 'Paper';
    else 
        return 'Scissors';
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        console.log('Draw');
        return 'Draw, Try again :(';
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('Won');
        return 'You Won! Rock beats Scissors';
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('Won')
        return 'You Won! Paper beats Rock';
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('Won');
        return 'You Won! Scissors beats Paper';
    }
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('Lose');
        return 'You Lose! Paper beats Rock';
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('Lose');
        return 'You Lose! Scissors beats Paper';
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('Lose');
        return 'You Lose! Rock beats scissors';
    }
    
}

function game(){
    let computerWins = 0;
    let playerWins = 0;
    for(let i=0; i<5; i++){
        const playerChoice = prompt('Choose: Rock, Paper, or Scissors');
        const computerChoice = getComputerChoice();
        console.log('computer choice: ' + computerChoice);
        console.log('player choice: ' + playerChoice);
        console.log('---------------------------');
        let result = playRound(playerChoice, computerChoice);
        if(result.includes('Win'))
            playerWins ++;
        else if(result.includes('Lose'))
            computerWins ++;
    }
    if(playerWins > computerWins)
        alert('Congrats, You won.');
    else if(playerWins < computerWins)
        alert('You lose :(');
    else 
        alert('Draw, please play again!');
}

game();

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
