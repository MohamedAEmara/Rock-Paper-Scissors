const btn1 = document.querySelector('.rock');
const btn2 = document.querySelector('.paper');
const btn3 = document.querySelector('.scissors');


function getComputerChoice()
{
    let randomChoice = Math.floor((Math.random()*3)%3) + 1;

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
    
    // display the computer choice on screen.
    const computerChoice = document.querySelector('.computer-choice-current');
    computerChoice.innerHTML = computerSelection;

    if(playerSelection === computerSelection){
        return 0;
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 1;
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 1;
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return 1;
    }
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return -1;
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return -1;
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return -1;
    }
    
}



function playerSelection(pChoice){
    const computerChoice = getComputerChoice();
    let res = playRound(pChoice, computerChoice);
    return res;

}


function decision(computer, user){
        if(computer == 5)
        {
            alert('Computer won :(');
            const e = document.querySelector('.computer');
            e.style.backgroundColor = 'red';
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }
        if(user == 5)
        {
            alert('You Won :)');
            const e = document.querySelector('.user');
            e.style.backgroundColor = 'red';
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }
}

function game(){

    let computerWins = 0;
    let playerWins = 0;   
        
    if(computerWins < 5 && playerWins < 5)
    {
        btn1.addEventListener('click', () => {
    
            res = playerSelection('rock');
    
            if(res == 1){
                playerWins ++;
                console.log('1');
            }
            else if(res == -1){
                computerWins ++;
                console.log('-1');
            }
    
            const computerPoints = document.querySelector('.computer-points');
            computerPoints.innerHTML = computerWins;
            const usertPoints = document.querySelector('.user-points');
            usertPoints.innerHTML = playerWins;
    

            decision(computerWins, playerWins);
            
        })
    
        btn2.addEventListener('click', () => {
            res = playerSelection('paper');
            console.log('Paper');
            playerChoice = 'paper';
            if(res == 1){
                playerWins ++;
                console.log('1');
            }
            else if(res == -1){
                computerWins ++;
                console.log('-1');
            }
    
            const computerPoints = document.querySelector('.computer-points');
            computerPoints.innerHTML = computerWins;
            const usertPoints = document.querySelector('.user-points');
            usertPoints.innerHTML = playerWins;

            decision(computerWins, playerWins);

    
        })
    
        btn3.addEventListener('click', () => {
            res = playerSelection('scissors');
            console.log('scissors');
            playerChoice = 'scissors';
            if(res == 1){
                playerWins ++;
                console.log('1');
            }
            else if(res == -1){
                computerWins ++;
                console.log('-1');
            }
    
            const computerPoints = document.querySelector('.computer-points');
            computerPoints.innerHTML = computerWins;
            const usertPoints = document.querySelector('.user-points');
            usertPoints.innerHTML = playerWins;

            decision(computerWins, playerWins);

    
        })
                 
    }
}


// call the game function.
game();
