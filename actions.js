// Rock Paper Scissors

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});


// Prior Code

function playRound(e){
    const playerChoice = e.target.textContent.toLowerCase();
    const computerChoice = computerPlay();
    changeState(playerChoice, computerChoice);
};

function computerPlay(){
    const choice = getRandomInt(3);
    switch (choice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'error';
    };
};

function outcome(player, computer){
    if (player == computer) return 'tie';
    switch (player){
        case 'rock':
            return (computer == 'paper') ? 'loss':'win';
            break;
        case 'paper':
            return (computer == 'scissors') ? 'loss':'win';
            break;
        case 'scissors':
            return (computer == 'rock') ? 'loss':'win';
        defualt:
            return;
    };
};

function changeState (player, computer) {
    const status = document.querySelector('#status p');
    const message = document.querySelector('#message h2');
    const state = outcome(player, computer);
    switch(state){
        case 'win':
            status.textContent = `${player} beats ${computer}.`
            message.textContent = "YOU WIN!"
            break;
        case 'loss':
            status.textContent = `${player} loses to ${computer}.`
            message.textContent = "YOU LOSE!"
            break;
        case 'tie':
            status.textContent = `${player} ties with ${computer}.`
            message.textContent = "We have a tie!"
            break;
        default:
            return;
    }

    message.textContent
};

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
};

/*
function playerSelection(){
    let choice;
    while (true){
        choice = prompt('Rock, Paper, or Scissors?');
        switch (choice.toLowerCase()){
            case 'rock':
                return 'rock';
                break;
            case 'paper':
                return 'paper';
                break;
            case 'scissors':
                return 'scissors';
                break;
            default:
                alert('Incorrect, it needs to be rock, paper, or scissors');
        }
    }
}

function game(){
    let i;
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++){
        let winState = playRound();
        switch (winState){
            case 'win':
                playerScore++;
                break;
            case 'loss':
                computerScore++;
                break;
            case 'tie':
                break;
            default:
                return;
        }
    }
    if (playerScore == computerScore) {
        console.log('tie');
        return 'tie';
    }
    console.log((playerScore > computerScore) ? 'win':'loss');
    return (playerScore > computerScore) ? 'win': 'loss';
}
*/