
var wins = 0;
var losses = 0;
var ties = 0;
var picks = ['R', 'P', 'S'];
do {
    playGame();
} while (confirm("Do you want to play again?"));

function playGame(){
    var userPick = prompt("What's your choice (R, P, S)?");
    var compPick = picks[computerNumber()];
    letsplay (userPick, compPick);
    scoreCard();
}
function computerNumber() {
    return Math.floor(Math.random()*3);
}


function letsplay(userChoice, compChoice){
    if (userChoice == compChoice) {
        alert("That's a tie!");
        ties = ties + 1;
    } else if (userChoice == 'R'){
        if (compChoice == 'S') {
            alert('You win!');
            wins = wins + 1;
        } else if (compChoice == 'P') {
            alert('You lose!');
            losses = losses + 1;
        }
    } else if (userChoice == 'P'){
        if (compChoice == 'R') {
            alert('You win!');
            wins = wins + 1;
        } else if (compChoice == 'S') {
            alert('You lose!');
            losses = losses + 1;
        }
    } else if (userChoice == 'S'){
        if (compChoice == 'P') {
            alert('You win!');
            wins = wins + 1;
        } else if (compChoice == 'R') {
            alert('You lose!');
            losses = losses + 1;
        }
    }
}

function scoreCard(){

    
    alert("Wins: " + wins + "\n Losses: " + losses + "\n Ties: " + ties);
}
