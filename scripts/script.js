let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let max = 3;
    let min = 1;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    let computerMove;
    switch (choice) {
        case 1:
            computerMove = 'rock';
            break;
        case 2:
            computerMove = 'paper';
            break;
        case 3:
            computerMove = 'scissors';
            break;
    }
    return computerMove;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win!! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win!! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win!! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == computerSelection) {
        return 'its a Tie!! you both chose ' + playerSelection;
    }
    else {
        computerScore++;
        return 'You lose!! ' + computerSelection + ' beats ' + playerSelection;
    }

}
function updateScore(){
    let player_display = document.querySelector('#player_score');
    player_display.textContent = playerScore;
    let computer_display = document.querySelector('#pc_score');
    computer_display.textContent = computerScore;
    
}
function winner (){
    if(playerScore==5){
        alert('You WIN!!')
        console.log('You win!!');
        playerScore = 0;
        computerScore = 0;
        updateScore();
        return 'You win!!';
    }
    if(computerScore==5){
        alert('You Lose!!')
        console.log('You lose!..');
        playerScore = 0;
        computerScore = 0;
        updateScore();
        return 'You lose!..';
    }

}
let button_r = document.querySelector('#rock_btn');
let button_p = document.querySelector('#paper_btn');
let button_s = document.querySelector('#scissors_btn');

let pc;
let player;

///GAME PLAY

button_r.addEventListener('click', function () {
    pc = computerPlay();
    player = 'rock';
    console.log('the computer chose : ' + pc);
    let result = playRound(player, pc);
    console.log(result);
    console.log('your score : ' + playerScore);
    console.log('computer score : ' + computerScore);
    updateScore();
    winner();
   

});
button_p.addEventListener('click', function () {
    pc = computerPlay();
    player = 'paper';
    console.log('the computer chose : ' + pc);
    let result = playRound(player, pc);
    console.log(result);
    console.log('your score : ' + playerScore);
    console.log('computer score : ' + computerScore);
    updateScore();
    winner();
})
button_s.addEventListener('click', function () {
    pc = computerPlay();
    player = 'scissors';
    console.log('the computer chose : ' + pc);
    let result = playRound(player, pc);
    console.log(result);
    console.log('your score : ' + playerScore);
    console.log('computer score : ' + computerScore);
    updateScore();
    winner();

   
})



/*


///___________________________________________


/*function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt('rock, paper, or scissors??');
        player = player.toLowerCase();
        let pc = computerPlay();
        console.log('the computer chose : ' + pc);
        let result = playRound(player, pc);
        console.log(result);
        console.log('your score : ' + playerScore);
        console.log('computer score : ' + computerScore);
    }
    if(playerScore>computerScore){
        console.log('You win!!');
        return 'You win!!';
    }else if(computerScore>playerScore){
        console.log('You lose!..');
        return 'You lose!..';
    }else{
        console.log('Its a tie!!');
        return 'Its a tie!!';
    }

}*/


